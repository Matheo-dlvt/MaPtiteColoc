import { Colocation, IColocation } from '../databases/mongodb/colocations.model';

class ColocationsRepository {
    async createColocation(colocation: Partial<IColocation>): Promise<IColocation> {
        const newColocation = await Colocation.create(colocation);
        return newColocation;
    }

    async findColocationById(id: string): Promise<IColocation | null> {
        return await Colocation.findById(id);
    }

    async findColocationByName(name: string): Promise<IColocation | null> {
        return await Colocation.findOne({ name });
    }

    async findAllColocations(): Promise<IColocation[]> {
        return await Colocation.find();
    }

    async updateColocation(id: string, colocation: Partial<IColocation>): Promise<IColocation | null> {
        return await Colocation.findByIdAndUpdate(id, colocation, { new: true });
    }

    async deleteColocation(id: string): Promise<IColocation | null> {
        return await Colocation.findByIdAndDelete(id);
    }
}

export default new ColocationsRepository();
