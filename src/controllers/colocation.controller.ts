import { ColocationService } from '../services/colocation.service';

export class ColocationController {
    private colocationService: ColocationService = new ColocationService();

    async createColocation(colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> {
        return await this.colocationService.createColocation(colocationToCreate);
    }

    async saveColocation(colocationToSave: ColocationToSaveDTO): Promise<ColocationPresenter> {
        return await this.colocationService.saveColocation(colocationToSave);
    }

    async getColocationById(colocationId: string): Promise<ColocationPresenter> {
        return await this.colocationService.getColocationById(colocationId);
    }

    async updateColocation(colocationId: string, colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter> {
        return await this.colocationService.updateColocation(colocationId, colocationToUpdate);
    }

    async deleteColocation(colocationId: string): Promise<ColocationPresenter> {
        return await this.colocationService.deleteColocation(colocationId);
    }
}
