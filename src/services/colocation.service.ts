import { ColocationModel } from "../databases/mongodb/colocation.model";
import { ColocationRepository } from "../repositories/colocation.repository";
import { ColocationToCreateDTO, ColocationToUpdateDTO, ColocationToSaveDTO } from "../types/colocation/dtos";
import { ColocationPresenter } from "../types/colocation/presenters";
import { UserService } from "./user.service";
import { plainToInstance } from 'class-transformer';
import { UserPresenter } from "../types/user/presenters";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { LogService } from "./log.service";
import { LogModel } from "../databases/mongodb/log.model";

export class ColocationService {
  private colocationRepository: ColocationRepository = new ColocationRepository();
  private userService: UserService = new UserService();
  private logService = new LogService();

  async createColocation(colocationToCreate: ColocationToCreateDTO): Promise<ColocationPresenter> {
    const exitColoc = await this.colocationRepository.findColocationByName(colocationToCreate.name);
    if (exitColoc) {
      throw new CustomError("Colocation already exist", "cae001", HTTPStatusCode.CONFLICT);
    }

    const newColocation = new ColocationModel({
      name: colocationToCreate.name,
      adress: colocationToCreate.adress,
      surface: colocationToCreate.surface,
      rent: colocationToCreate.rent
    });

    // const log = new LogModel({
    //   userId: null,
    //   userEmail: null,
    //   colocationName: newColocation.name,
    //   action: "create",
    //   object: "colocation",
    //   validated: true,
    //   date: Date.now()
    // });

    // this.logService.createLog(log);

    return await this.colocationRepository.saveColocation(newColocation);
  }

  async findColocationById(colocationId: string): Promise<ColocationPresenter | null> {
    // const log = new LogModel({
    //   userId: null,
    //   userEmail: null,
    //   colocationName: null,
    //   action: "findById",
    //   object: "colocation",
    //   validated: true,
    //   date: Date.now()
    // });

    // this.logService.createLog(log);

    return await this.colocationRepository.findColocationById(colocationId);
  }

  async findColocationByName(name: string): Promise<ColocationPresenter | null> {
    // const log = new LogModel({
    //   userId: null,
    //   userEmail: null,
    //   colocationName: null,
    //   action: "findByName",
    //   object: "colocation",
    //   validated: true,
    //   date: Date.now()
    // });

    // this.logService.createLog(log);

    return await this.colocationRepository.findColocationByName(name);
  }

  // async deleteColocationForUser(userId: string, colocationId: string): Promise<ColocationPresenter | null> {
  //   const user = await this.userService.findUserById(userId);
  //   if (!user) {
  //     throw new Error("User not found");
  //   }

  //   const colocation = await this.colocationRepository.findColocationById(colocationId);
  //   if (!colocation) {
  //     throw new Error("Colocation not found");
  //   }

  //   if (!colocation.usersIds.includes(userId)) {
  //     throw new Error("User not in Colocation");
  //   }

  //   user.colocations = user.colocations.filter(id => id !== colocationId);
  //   const updatedUser = await this.userService.updateUser(userId, user);

  //   const presentedUser = plainToInstance(UserPresenter, user, { excludeExtraneousValues: true });
  //   return presentedUser;
  // }

  async updateColocation(colocationToUpdate: ColocationToUpdateDTO): Promise<ColocationPresenter | null> {
    const colocation = await this.colocationRepository.findColocationByName(colocationToUpdate.name);
    if (!colocation) {
      throw new CustomError("Colocation not found", "cnf001", HTTPStatusCode.BAD_REQUEST);
    }

    colocation.name = colocationToUpdate.name || colocation.name;
    colocation.adress = colocationToUpdate.adress || colocation.adress;
    colocation.surface = colocationToUpdate.surface || colocation.surface;
    colocation.rent = colocationToUpdate.rent || colocation.rent;
    colocation.usersIds = colocationToUpdate.usersIds || colocation.usersIds;
    colocation.totalAmount = colocationToUpdate.totalAmount || colocation.totalAmount;

    const updatedColocation = await this.colocationRepository.updateColocation(colocation._id, colocation);

    const presentedColocation = plainToInstance(ColocationPresenter, updatedColocation, { excludeExtraneousValues: true });

    // const log = new LogModel({
    //   userId: null,  //Id of connected user
    //   userEmail: null,  //Email of connected user
    //   colocationName: colocation.name,
    //   action: "update",
    //   object: "colocation",
    //   validated: true,
    //   date: Date.now()
    // });

    // this.logService.createLog(log);

    return presentedColocation;
  }
}
