import { UserFinanceService } from '../services/userFinance.service';

export const createUserFinance = async (userFinanceToCreate: UserFinanceToCreateDTO): Promise<UserFinancePresenter> => {
    return await UserFinanceService.createUserFinance(userFinanceToCreate);
}

export const saveUserFinance = async (userFinanceToSave: UserFinanceToSaveDTO): Promise<UserFinancePresenter> => {
    return await UserFinanceService.saveUserFinance(userFinanceToSave);
}

export const getUserFinanceByUserId = async (userId: string): Promise<UserFinancePresenter> => {
    return await UserFinanceService.getUserFinanceByUserId(userId);
}

export const getUserFinanceByColocationId = async (colocationId: string): Promise<UserFinancePresenter> => {
    return await UserFinanceService.getUserFinanceByColocationId(colocationId);
}

export const updateUserFinance = async (userFinanceId: string, userFinanceToUpdate: UserFinanceToUpdateDTO): Promise<UserFinancePresenter> => {
    return await UserFinanceService.updateUserFinance(userFinanceId, userFinanceToUpdate);
}

export const deleteUserFinance = async (userFinanceId: string): Promise<UserFinancePresenter> => {
    return await UserFinanceService.deleteUserFinance(userFinanceId);
}
