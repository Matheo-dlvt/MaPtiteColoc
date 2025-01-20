import { ColocationEntity } from "../databases/mysql/colocation.entity";
import { ColocationRepository } from "../repositories/colocation.repository";

export class ColocationService {
  private colocationRepository: ColocationRepository = new ColocationRepository();

  async createColocation(colocation: ColocationEntity): Promise<ColocationEntity> {
    const newColocation = this.colocationRepository.createColocation(colocation);
    return newColocation;
  }

  async saveColocation(colocation: ColocationEntity): Promise<ColocationEntity> {
    return this.colocationRepository.saveColocation(colocation);
  }

  async findColocationById(colocationId: number): Promise<ColocationEntity | null> {
    return await this.colocationRepository.findColocationById(colocationId);
  }

  async findAllColocations(): Promise<ColocationEntity[]> {
    return await this.colocationRepository.findAllColocations();
  }

  async updateColocation(colocationId: number, colocation: ColocationEntity): Promise<ColocationEntity | null> {
    return await this.colocationRepository.updateColocation(colocationId, colocation);
  }

  async deleteColocation(colocationId: number): Promise<ColocationEntity | null> {
    return await this.colocationRepository.deleteColocation(colocationId);
  }
}
