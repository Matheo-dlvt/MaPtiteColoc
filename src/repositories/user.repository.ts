import { IUser, UserModel } from '../databases/mongodb/user.model';

export class UserRepository {

    createUser(user: IUser): IUser {
        return new UserModel(user);
    }

    async saveUser(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }

    async findUserById(userId: string): Promise<IUser | null> {
        return await UserModel.findById(userId);
    }

    async findUserByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email: email });
    }

    async findAllUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    async updateUser(userId: string, user: IUser): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(userId, user);
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await UserModel.findByIdAndDelete(userId);
    }
}
