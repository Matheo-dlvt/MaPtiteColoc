import { ColocationService } from '../services/colocation.service';

const createColocation = async (colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> => {
    return await ColocationService.createColocation(colocationToCreate);
}

const saveColocation = async (colocationToSave: ColocationToSaveDTO): Promise<ColocationPresenter> => {
    return await ColocationService.saveColocation(colocationToSave);
}

const findColocationById = async (colocationId: string): Promise<ColocationPresenter> => {
    return await ColocationService.findcolocationById(colocationId);
}

const updateColocation = async (colocationId: string, colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter> => {
    return await ColocationService.updateColocation(colocationId, colocationToUpdate);
}

const deleteColocation = async (colocationId: string): Promise<ColocationPresenter> => {
    return await ColocationService.deleteColocation(colocationId);
}
