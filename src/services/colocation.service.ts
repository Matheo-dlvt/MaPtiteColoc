import { ColocationRepository } from "../repositories/colocation.repository";

export class ColocationService {
  private colocationRepository: ColocationRepository = new ColocationRepository();

  async createColocation(colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.createColocation(colocationToCreate);
  }

  async saveColocation(colocationToSave: ColocationToSaveDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.saveColocation(colocationToSave);
  }

  async getColocationById(colocationId: string): Promise<ColocationPresenter> {
    return await this.colocationRepository.getColocationById(colocationId);
  }

  async updateColocation(colocationId: string, colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.updateColocation(colocationId, colocationToUpdate);
  }

  async deleteColocation(colocationId: string): Promise<ColocationPresenter> {
    return await this.colocationRepository.deleteColocation(colocationId);
  }
}
