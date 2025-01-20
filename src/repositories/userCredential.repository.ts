import { UserCredentialModel, IUserCredential } from "../databases/mongodb/userCredential.model";

export class UserCredentialRepository {

    createUserCredential(userCredential: IUserCredential): IUserCredential {
        return new UserCredentialModel(userCredential);
    }

    async saveUserCredential(userCredential: IUserCredential): Promise<IUserCredential> {
        return await UserCredentialModel.create(userCredential);
    }

    async findUserCredentialByUserId(userId: string): Promise<IUserCredential | null> {
        return await UserCredentialModel.findOne({ userId: userId });
    }

    async updateUserCredential(userId: string, userCredential: IUserCredential): Promise<IUserCredential | null> {
        return await UserCredentialModel.findOneAndUpdate({ userId: userId }, userCredential);
    }

    async deleteUserCredential(userId: string): Promise<IUserCredential | null> {
        return await UserCredentialModel.findOneAndDelete({ userId: userId });
    }
}
