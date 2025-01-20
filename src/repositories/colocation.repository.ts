import { ColocationEntity } from "../databases/mysql/colocation.entity";
import { Repository } from "typeorm";
import { connectMySQLDB } from "../configs/databases/mysql.config";

export class ColocationRepository{

    private colocationDB: Repository<ColocationEntity>;

    constructor() {
        this.colocationDB = connectMySQLDB.getRepository(ColocationEntity);
    }

    createColocation(colocation: ColocationEntity): ColocationEntity {
        const newColocation = this.colocationDB.create(colocation);
        return newColocation
    }

    async saveColocation(colocation: ColocationEntity): Promise<ColocationEntity> {
        return this.colocationDB.save(colocation);
    }

    async findColocationById(colocationId: number): Promise<ColocationEntity | null> {
        return await this.colocationDB.findOneBy({ id: colocationId });
    }

    async findAllColocations(): Promise<ColocationEntity[]> {
        return await this.colocationDB.find();
    }

    async updateColocation(colocationId: number, colocation: ColocationEntity): Promise<ColocationEntity | null> {
        await this.colocationDB.update(colocationId, colocation);
        return await this.findColocationById(colocationId);
    }

    async deleteColocation(colocationId: number): Promise<ColocationEntity | null> {
        await this.colocationDB.delete(colocationId);
        return await this.findColocationById(colocationId);
    }
}
