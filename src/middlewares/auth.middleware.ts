import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRepository } from "../repositories/user.repository";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';


const userRepository = new UserRepository();

export const authenticateJWT = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json(new CustomError("No token provided", "ntp001", HTTPStatusCode.UNAUTHORIZED));
    }

    try {
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "viscabarca");
        const user = await userRepository.findUserById(decoded.userId);
    
        if (!user) {
            return res.status(401).json(new CustomError("User not found", "unf002", HTTPStatusCode.BAD_REQUEST))
        }
        
        const { password, ...userWithoutPassword } = user;
        (req as any).user = userWithoutPassword; 
        next();

    } catch (error) {
        return res.status(401).json(new CustomError("User not found", "unf004", HTTPStatusCode.BAD_REQUEST))
    }
};
