import { UserRepository } from "../repositories/user.repository";
import { UserToCreateDTO } from "../types/user/dtos";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { plainToInstance } from "class-transformer";
import { UserPresenter } from "../types/user/presenters";
import { hashPassword } from "./bcrypt.service";
import { IUser, UserModel } from '../databases/mongodb/user.model';

export class UserService {
  private userRepository: UserRepository = new UserRepository();

  async registerUser(userToCreate: UserToCreateDTO): Promise<UserPresenter> {
    // Check if the user already exists by email
    const existingUser = await this.userRepository.findUserByEmail(userToCreate.email);
    if (existingUser) {
      throw new CustomError('User already exists', 'uae001', HTTPStatusCode.CONFLICT);
    }

    // Hash the user's password
    const hashedPassword = await hashPassword(userToCreate.password);

    // Create a new User object
    const newUser = new UserModel({
      firstname: userToCreate.firstname,
      lastname: userToCreate.lastname,
      email: userToCreate.email,
      password: hashedPassword,
      isActive: true,
      colocations: [],
    });

    // Save the new user in the database
    const savedUser = await this.userRepository.saveUser(newUser);

    console.log(`User successfully created with ID: ${savedUser._id}`);

    // Transform saved user to UserPresenter
    const presentedUser = plainToInstance(UserPresenter, savedUser, { excludeExtraneousValues: true });

    return presentedUser;
  }

  async deleteUser(userId: string): Promise<UserPresenter> {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new CustomError('User not found', 'unf001', HTTPStatusCode.NOT_FOUND);
    }

    user.isActive = false;
    const savedUser = await this.userRepository.updateUser(user._id, user);

    const presentedUser = plainToInstance(UserPresenter, savedUser, { excludeExtraneousValues: true });
    return presentedUser;
  }
  
  async getUserDetails(userId: string): Promise<UserPresenter> {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new CustomError('User not found', 'unf001', HTTPStatusCode.NOT_FOUND);
    }

    const presentedUser = plainToInstance(UserPresenter, user, {
      excludeExtraneousValues: true,
    });

    return presentedUser;
  }
}
