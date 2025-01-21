import { UserRepository } from "../repositories/user.repository";
import { UserToCreateDTO, UserToUpdateDTO } from "../types/user/dtos";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { plainToInstance } from "class-transformer";
import { UserPresenter } from "../types/user/presenters";
import { hashPassword } from "./bcrypt.service";
import { IUser, UserModel } from '../databases/mongodb/user.model';
import { LogService } from "./log.service";
import { LogModel } from "../databases/mongodb/log.model";
import { getConnectedUserId, setConnectedUserId } from "../static/userConnectd";

export class UserService {
  private userRepository: UserRepository = new UserRepository();
  private logService = new LogService();

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

    const log = new LogModel({
      userId: savedUser._id,
      userEmail: savedUser.email,
      colocationName: null,
      action: "register",
      object: "user",
      validated: true,
      date: new Date()
    });

    this.logService.createLog(log);

    setConnectedUserId(savedUser._id);

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

    const log = new LogModel({
      userId: user._id,
      userEmail: user.email,
      colocationName: null,
      action: "delete",
      object: "user",
      validated: true,
      date: Date.now()
    });

    this.logService.createLog(log);

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

    const log = new LogModel({
      userId: user._id,
      userEmail: user.email,
      colocationName: null,
      action: "getMe",
      object: "user",
      validated: true,
      date: Date.now()
    });

    this.logService.createLog(log);

    return presentedUser;
  }

  async findUserById(userId: string): Promise<UserPresenter | null> {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new CustomError('User not found', 'unf002', HTTPStatusCode.NOT_FOUND);
    }

    const presentedUser = plainToInstance(UserPresenter, user, {
      excludeExtraneousValues: true,
    });

    const log = new LogModel({
      userId: user._id,
      userEmail: user.email,
      colocationName: null,
      action: "findById",
      object: "user",
      validated: true,
      date: Date.now()
    });

    this.logService.createLog(log);

    return presentedUser;
  }

  // async updateUser(user: UserToUpdateDTO): Promise<UserPresenter> {
  //   let updatedUser = plainToInstance(UserModel, user, { excludeExtraneousValues: true });
  //   updatedUser = await this.userRepository.updateUser(user._id, user);

  //   const presentedUser = plainToInstance(UserPresenter, updatedUser, { excludeExtraneousValues: true });

  //   return presentedUser;
  // }
}
