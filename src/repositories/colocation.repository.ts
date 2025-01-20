import { IColocation, ColocationModel } from "../databases/mongodb/colocation.model";

export class ColocationRepository {

    createColocation(colocation: IColocation): IColocation {
        return new ColocationModel(colocation);
    }

    async saveColocation(colocation: IColocation): Promise<IColocation> {
        return await ColocationModel.create(colocation);
    }

    async findColocationById(colocationId: string): Promise<IColocation | null> {
        return await ColocationModel.findById(colocationId);
    }

    async findColocationByName(name: string): Promise<IColocation | null> {
        return await ColocationModel.findOne({ name: name });
    }

    async updateColocation(colocationId: string, colocation: IColocation): Promise<IColocation | null> {
        return await ColocationModel.findByIdAndUpdate(colocationId, colocation);
    }

    async deleteColocation(colocationId: string): Promise<IColocation | null> {
        return await ColocationModel.findByIdAndDelete(colocationId);
    }
}
