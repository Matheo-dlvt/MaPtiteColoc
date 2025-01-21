import { ColocationService } from '../services/colocation.service';
import { ColocationToCreateDTO, ColocationToUpdateDTO, ColocationToSaveDTO } from '../types/colocation/dtos';
import { ColocationPresenter } from '../types/colocation/presenters';
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";

const colocationService = new ColocationService();

export const createColocation = async (req: Request, res: Response): Promise<void> => {
    try {
        const colocationToCreate = plainToInstance(ColocationToCreateDTO, req.body, { excludeExtraneousValues: true });
        const colocation = await colocationService.createColocation(colocationToCreate);
        res.status(201).json(colocation);
    } catch (error) {
        throw error;
    }
};

// export const findColocationById = async (colocationId: string): Promise<ColocationPresenter | null> => {
//     return await colocationService.findColocationById(colocationId);
// };

// export const findColocationByName = async (name: string): Promise<ColocationPresenter | null> => {
//     return await colocationService.findColocationByName(name);
// };

// export const deleteColocation = async (colocationId: string): Promise<ColocationPresenter | null> => {
//     return await colocationService.deleteColocation(colocationId);
//};
