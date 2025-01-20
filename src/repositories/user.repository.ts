import { UserEntity } from "../databases/mysql/user.entity";
import { Repository } from "typeorm";
import { connectMySQLDB } from "../configs/databases/mysql.config";
import { UserToCreateDTO } from "../types/user/dtos";
import { userToCreateInput } from "../types/user/Inputs";

export class UserRepository{

    private userDB: Repository<UserEntity>;

    constructor() {
        this.userDB = connectMySQLDB.getRepository(UserEntity);
    }

    create(user: userToCreateInput): UserEntity {
        const newUser = this.userDB.create(user);
        return newUser
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return this.userDB.save(user);
    }

    async findUserById(userId: number): Promise<UserEntity | null> {
        return await this.userDB.findOneBy({ id: userId });
    }

    async findUserByEmail(email: string): Promise<UserEntity | null> {
        return await this.userDB.findOneBy({ email: email });
    }

    async findAllUsers(): Promise<UserEntity[]> {
        return await this.userDB.find();
    }

    async updateUser(userId: number, user: UserToCreateDTO): Promise<UserEntity | null> {
        await this.userDB.update(userId, user);
        return await this.findUserById(userId);
    }

    async deleteUser(userId: number): Promise<UserEntity | null> {
        await this.userDB.delete(userId);
        return await this.findUserById(userId);
    }
}
