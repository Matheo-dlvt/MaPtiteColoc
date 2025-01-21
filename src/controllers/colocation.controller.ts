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

export const findColocationById = async (req: Request, res: Response): Promise<void> => {
    try {
        const colocationId = req.body.colocationId;
        const colocation = await colocationService.findColocationById(colocationId);
        res.status(200).json(colocation);
    } 
    catch (error) {
        throw error;
    }
};

export const findColocationByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const colocation = await colocationService.findColocationByName(req.body.colocationName);
        res.status(200).json(colocation);
    } 
    catch (error) {
        throw error;
    }
};

export const deleteColocationForUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const colocationId = req.body.colocationId;
        const userId = req.body.userId;
        const colocation = await colocationService.deleteColocationForUser(userId, colocationId);
        res.status(200).json(colocation);
    } 
    catch (error) {
        throw error;
    }
};
