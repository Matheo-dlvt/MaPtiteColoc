import { ColocationModel } from "../databases/mongodb/colocation.model";
import { ColocationRepository } from "../repositories/colocation.repository";
import { ColocationToCreateDTO, ColocationToUpdateDTO, ColocationToSaveDTO } from "../types/colocation/dtos";
import { ColocationPresenter } from "../types/colocation/presenters";

export class ColocationService {
  private colocationRepository: ColocationRepository = new ColocationRepository();

  async createColocation(colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> {
    const exitColoc = await this.colocationRepository.findColocationByName(colocationToCreate.name);
    if (exitColoc) {
      throw new Error("Colocation already exists");
    }

    const newColocation = new ColocationModel({
      name: colocationToCreate.name,
      adress: colocationToCreate.adress,
      surface: colocationToCreate.surface,
      rent: colocationToCreate.rent
    });

    return await this.colocationRepository.saveColocation(newColocation);
  }

  async findColocationById(colocationId: string): Promise<ColocationPresenter | null> {
    return await this.colocationRepository.findColocationById(colocationId);
  }

  async findColocationByName(name: string): Promise<ColocationPresenter | null> {
    return await this.colocationRepository.findColocationByName(name);
  }

  // async updateColocation(colocationId: string, colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter | null> {
  //   return await this.colocationRepository.updateColocation(colocationId, colocationToUpdate);
  // }

  async deleteColocation(colocationId: string): Promise<ColocationPresenter | null> {
    return await this.colocationRepository.deleteColocation(colocationId);
  }
}
