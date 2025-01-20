import { IUser, User } from "../databases/mongodb/user.model";

export class UserRepository {

    createUser(user: IUser): IUser {
        return new User(user);
    }

    async saveUser(user: IUser): Promise<IUser> {
        return await (user as User).save();
    }
}