import { UserFinanceService } from '../services/userFinance.service';

export class UserFinanceController {
    private userFinanceService: UserFinanceService = new UserFinanceService();

    async createUserFinance(userFinanceToCreate: UserFinanceToCreateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceService.createUserFinance(userFinanceToCreate);
    }

    async saveUserFinance(userFinanceToSave: UserFinanceToSaveDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceService.saveUserFinance(userFinanceToSave);
    }

    async getUserFinanceByUserId(userId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceService.getUserFinanceByUserId(userId);
    }

    async getUserFinanceByColocationId(colocationId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceService.getUserFinanceByColocationId(colocationId);
    }

    async updateUserFinance(userFinanceId: string, userFinanceToUpdate: UserFinanceToUpdateDTO): Promise<UserFinancePresenter> {
        return await this.userFinanceService.updateUserFinance(userFinanceId, userFinanceToUpdate);
    }

    async deleteUserFinance(userFinanceId: string): Promise<UserFinancePresenter> {
        return await this.userFinanceService.deleteUserFinance(userFinanceId);
    }
}
