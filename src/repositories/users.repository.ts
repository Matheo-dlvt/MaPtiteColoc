import { User, IUser } from "../databases/mongodb/users.model";

export class UserRepository {

    async createUser(user: Partial<IUser>): Promise<IUser> {
        const newUser = await User.create(user);
        return newUser;
    }

    async findUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async findUserByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email });
    }

    async findAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await User.findByIdAndDelete(id);
    }
}
