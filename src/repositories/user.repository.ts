import { IUser, UserModel } from '../databases/mongodb/user.model';

export class UserRepository {
    createUserCredential(arg0: { user_id: string; password_hash: string; }) {
      throw new Error("Method not implemented.");
    }

    createUser(user: IUser): IUser {
        return new UserModel(user);
    }

    async saveUser(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }

    async findUserById(userId: number): Promise<IUser | null> {
        return await UserModel.findById(userId);
    }

    async findUserByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email: email });
    }

    async findAllUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    async updateUser(userId: number, user: IUser): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(userId, user);
    }

    async deleteUser(userId: number): Promise<IUser | null> {
        return await UserModel.findByIdAndDelete(userId);
    }
}
