import { UserFinanceRepository } from '../repositories/userFinance.repository';
import { UserFinanceToCreateDTO, UserFinanceToUpdateDTO, UserFinanceToSaveDTO } from '../types/userFinance/dtos';
import { UserFinancePresenter } from '../types/userFinance/presenters';

export class UserFinanceService {
    private userFinanceRepository: UserFinanceRepository = new UserFinanceRepository();

    async createUserFinance(userFinanceToCreate: UserFinanceToCreateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.createUserFinance(userFinanceToCreate);
    }

    async saveUserFinance(userFinanceToSave: UserFinanceToSaveDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.saveUserFinance(userFinanceToSave);
    }

    async findUserFinanceByUserId(userId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.findUserFinanceByUserId(userId);
    }

    async findUserFinanceByColocationId(colocationId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.findUserFinanceByColocationId(colocationId);
    }

    async updateUserFinance(userFinanceId: string, userFinanceToUpdate: UserFinanceToUpdateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.updateUserFinance(userFinanceId, userFinanceToUpdate);
    }

    async deleteUserFinance(userFinanceId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceRepository.deleteUserFinance(userFinanceId);
    }
}
