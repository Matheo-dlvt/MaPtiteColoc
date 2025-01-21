import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";
import { UserToCreateDTO } from "../types/user/dtos";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { UserPresenter } from "../types/user/presenters";

const userService = new UserService();

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
   const userToCreateDTO = plainToInstance(UserToCreateDTO, req.body, { excludeExtraneousValues: true });

   const dtoErrors = await validate(userToCreateDTO);
   if (dtoErrors.length > 0) {
     console.log(dtoErrors);
     throw new Error("Invalid fields");
   }
    
    const user = await userService.registerUser(req.body);
    // appeler le logger service pour enregistrer QUI a créer un utilisateur (peut être un admin ou l'utilisateur lui même (?)  )

    const createdUser = plainToInstance(UserPresenter, user, { excludeExtraneousValues: true });
    res.status(201).json(createdUser); // à vous de créer une class pour gérer les success
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const authService = new AuthService();
    const user = await authService.login(req.body.email, req.body.password);
    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const authService = new AuthService();
    const token = await authService.verifyRefreshToken(req.body.refreshToken);
    res.status(200).json({ token });
  } catch (error) {
    throw error;
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const me = await userService.getUserDetails(req.body.userId);
    res.status(200).json({ me });
  }
  catch (error) {
    throw error;
  }
};

export const deleteMe = async (req: Request, res: Response) => {
  try {
    const deletedUser = await userService.deleteUser(req.body.userId);
    res.status(200).json({ deletedUser });
  }
  catch (error) {
    throw error;
  }
};
