import { UserCredentialEntity } from "../databases/mysql/userCredential.entity";
import { Repository } from "typeorm";
import { connectMySQLDB } from "../configs/databases/mysql.config";
import { UserToCreateDTO } from "../types/user/dtos";
import { userToCreateInput } from "../types/user/Inputs";

export class UserCredentialRepository{

    private userDB: Repository<UserCredentialEntity>;

    constructor() {
        this.userDB = connectMySQLDB.getRepository(UserCredentialEntity);
    }

    createUserCredential(userCredential: UserCredentialEntity): UserCredentialEntity {
        const newUser = this.userDB.create(userCredential);
        return newUser
    }

    async saveUserCredential(userCredential: UserCredentialEntity): Promise<UserCredentialEntity> {
        return this.userDB.save(userCredential);
    }

    async findUserCredentialById(userId: number): Promise<UserCredentialEntity | null> {
        return await this.userDB.findOneBy({ id: userId });
    }

    async findUserCredentialByUserId(userId: number): Promise<UserCredentialEntity | null> {
        return await this.userDB.findOneBy({ userId: userId });
    }

    async findAllUserCredential(): Promise<UserCredentialEntity[]> {
        return await this.userDB.find();
    }

    async updateUserCredential(credentialId: number, userCredential: UserCredentialEntity): Promise<UserCredentialEntity | null> {
        await this.userDB.update(credentialId, userCredential);
        return await this.findUserCredentialById(credentialId);
    }

    async deleteUserCredential(credentialId: number): Promise<UserCredentialEntity | null> {
        await this.userDB.delete(credentialId);
        return await this.findUserCredentialById(credentialId);
    }
}
