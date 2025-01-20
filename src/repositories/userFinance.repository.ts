import { IUserFinance, UserFinanceModel } from '../databases/mongodb/userFinance.entity';

export class UserFinanceRepository {
    createUserFinance(userFinance: IUserFinance): IUserFinance {
        return new UserFinanceModel(userFinance);
    }

    async saveUserFinance(userFinance: IUserFinance): Promise<IUserFinance> {
        return await UserFinanceModel.create(userFinance);
    }

    async findUserFinanceByUserId(userId: string): Promise<IUserFinance | null> {
        return await UserFinanceModel.findOne({ userId: userId });
    }

    async findUserFinanceByColocationId(colocationId: string): Promise<IUserFinance | null> {
        return await UserFinanceModel.findOne({ colocationId: colocationId });
    }

    async updateUserFinance(userFinanceId: string, userFinance: IUserFinance): Promise<IUserFinance | null> {
        return await UserFinanceModel.findByIdAndUpdate(userFinanceId, userFinance);
    }

    async deleteUserFinance(userFinanceId: string): Promise<IUserFinance | null> {
        return await UserFinanceModel.findByIdAndDelete(userFinanceId);
    }
}
