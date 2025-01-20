import { UserFinanceEntity } from "../databases/mysql/userFinance.entity";
import { Repository } from "typeorm";
import { connectMySQLDB } from "../configs/databases/mysql.config";

export class UserFinanceRepository{

    private userFinanceDB: Repository<UserFinanceEntity>;

    constructor() {
        this.userFinanceDB = connectMySQLDB.getRepository(UserFinanceEntity);
    }

    createUserFinance(userFinance: UserFinanceEntity): UserFinanceEntity {
        const newUserFinance = this.userFinanceDB.create(userFinance);
        return newUserFinance
    }

    async saveUserFinance(userFinance: UserFinanceEntity): Promise<UserFinanceEntity> {
        return this.userFinanceDB.save(userFinance);
    }

    async findUserFinanceById(userFinanceId: number): Promise<UserFinanceEntity | null> {
        return await this.userFinanceDB.findOneBy({ id: userFinanceId });
    }

    async findAllUserFinances(): Promise<UserFinanceEntity[]> {
        return await this.userFinanceDB.find();
    }

    async updateUserFinance(userFinanceId: number, userFinance: UserFinanceEntity): Promise<UserFinanceEntity | null> {
        await this.userFinanceDB.update(userFinanceId, userFinance);
        return await this.findUserFinanceById(userFinanceId);
    }

    async deleteUserFinance(userFinanceId: number): Promise<UserFinanceEntity | null> {
        await this.userFinanceDB.delete(userFinanceId);
        return await this.findUserFinanceById(userFinanceId);
    }
}
