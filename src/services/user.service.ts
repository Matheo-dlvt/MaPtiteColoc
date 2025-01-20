// import { UserEntity } from "../databases/mysql/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserToCreateDTO } from "../types/user/dtos";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { plainToInstance } from "class-transformer";
import { UserPresenter } from "../types/user/presenters";
import { hashPassword } from "./bcrypt.service";

export class UserService {
  private userRepository: UserRepository = new UserRepository();

  async registerUser(userToCreate: UserToCreateDTO): Promise<UserPresenter> {
      
    const existingUser = await this.userRepository.findUserByEmail(userToCreate.email);
    if (existingUser) {
      throw new CustomError('User already exists', 'uae001', HTTPStatusCode.CONFLICT);;
    }
    const userDTOPassword = await hashPassword(userToCreate.password);
    const newUser = this.userRepository.createUser({...userToCreate, password_hash: userDTOPassword});
    const newUserCredential = this.userRepository.createUserCredential({user_id: newUser._id, password: userDTOPassword});
    const savedUser = await this.userRepository.saveUser(newUser);

    console.log(`User successfully created with ID: ${savedUser._id}`);
    const presentedUser = plainToInstance(UserPresenter, savedUser, { excludeExtraneousValues: true })
    return presentedUser;
  }
}