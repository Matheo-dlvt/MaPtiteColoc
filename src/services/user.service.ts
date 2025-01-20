import { UserRepository } from "../repositories/user.repository";
import { UserToCreateDTO } from "../types/user/dtos";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { plainToInstance } from "class-transformer";
import { UserPresenter } from "../types/user/presenters";
import { hashPassword } from "./bcrypt.service";
import { UserCredentialRepository } from '../repositories/userCredential.repository';
import { IUser, UserModel } from '../databases/mongodb/user.model';

export class UserService {
  private userRepository: UserRepository = new UserRepository();
  private userCredentialRepository: UserCredentialRepository = new UserCredentialRepository();

  /**
   * Registers a new user with hashed password and creates user credentials.
   * @param userToCreate - Data Transfer Object for user creation
   * @returns UserPresenter - Transformed user data
   */
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
      isActive: true,
      colocations: [],
    });

    // Save the new user in the database
    const savedUser = await this.userRepository.saveUser(newUser);

    // Create credentials associated with the user
    await this.userCredentialRepository.saveUserCredential({
      _id: savedUser._id,
      userId: savedUser._id,
      password_hash: hashedPassword,
    });

    console.log(`User successfully created with ID: ${savedUser._id}`);

    // Transform saved user to UserPresenter
    const presentedUser = plainToInstance(UserPresenter, savedUser, {
      excludeExtraneousValues: true,
    });

    return presentedUser;
  }

  /**
   * Deletes a user by their ID.
   * @param userId - The ID of the user to delete
   * @returns void
   */
  async deleteUser(userId: string): Promise<void> {
    const user = await this.userRepository.findUserById(userId);

    if (!user) {
      throw new CustomError('User not found', 'unf001', HTTPStatusCode.NOT_FOUND);
    }

    // Perform a logical deletion (e.g., setting isActive to false)
    user.isActive = false;
    await this.userRepository.saveUser(user);

    console.log(`User with ID: ${userId} has been deactivated.`);
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
