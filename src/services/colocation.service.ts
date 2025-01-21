import { ColocationRepository } from "../repositories/colocation.repository";
import { ColocationToCreateDTO, ColocationToUpdateDTO, ColocationToSaveDTO } from "../types/colocation/dtos";
import { ColocationPresenter } from "../types/colocation/presenters";

export class ColocationService {
  private colocationRepository: ColocationRepository = new ColocationRepository();

  async createColocation(colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.createColocation(colocationToCreate);
  }

  async saveColocation(colocationToSave: ColocationToSaveDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.saveColocation(colocationToSave);
  }

  async findColocationById(colocationId: string): Promise<ColocationPresenter> {
    return await this.colocationRepository.findColocationById(colocationId);
  }

  async findColocationByName(name: string): Promise<ColocationPresenter> {
    return await this.colocationRepository.findColocationByName(name);
  }

  async updateColocation(colocationId: string, colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter> {
    return await this.colocationRepository.updateColocation(colocationId, colocationToUpdate);
  }

  async deleteColocation(colocationId: string): Promise<ColocationPresenter> {
    return await this.colocationRepository.deleteColocation(colocationId);
  }
}
