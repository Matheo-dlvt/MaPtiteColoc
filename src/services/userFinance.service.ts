import { UserFinanceRepository } from '../repositories/userFinance.repository';

export class UserFinanceService {
    private userFinanceRepository: UserFinanceRepository = new UserFinanceRepository();

    async createUserFinance(userFinanceToCreate: UserFinanceToCreateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.createUserFinance(userFinanceToCreate);
    }

    async saveUserFinance(userFinanceToSave: UserFinanceToSaveDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.saveUserFinance(userFinanceToSave);
    }

    async getUserFinanceByUserId(userId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.getUserFinanceByUserId(userId);
    }

    async getUserFinanceByColocationId(colocationId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.getUserFinanceByColocationId(colocationId);
    }

    async updateUserFinance(userFinanceId: string, userFinanceToUpdate: UserFinanceToUpdateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.updateUserFinance(userFinanceId, userFinanceToUpdate);
    }

    async deleteUserFinance(userFinanceId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.deleteUserFinance(userFinanceId);
    }
}
