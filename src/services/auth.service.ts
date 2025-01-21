import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../databases/mongodb/user.model";
import { comparePassword } from "./bcrypt.service";
import { CustomError } from '../utils/customError.exception';
import { HTTPStatusCode } from '../types/errors';
import { LogModel } from "../databases/mongodb/log.model";
import { LogService } from "./log.service";

export class AuthService {
    private userRepository = new UserRepository();
    private logService = new LogService();

    async login(email: string, password: string): Promise<{ accessToken: string; refreshToken: string; user: IUser }> {
        try {
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw new CustomError("Invalid email or password", "iep001", HTTPStatusCode.UNAUTHORIZED);
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new CustomError("Invalid email or password", "iep002", HTTPStatusCode.UNAUTHORIZED);
        }

        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

        // const log = new LogModel({
        //     userId: user._id,
        //     userEmail: user.email,
        //     action: "login",
        //     object: "user",
        //     validated: true,
        //     date: Date.now()
        // });

        // this.logService.createLog(log);

        return { accessToken, refreshToken, user };
        } 
        catch (error) {
            // const log = new LogModel({
            //     userId: null,
            //     userEmail: email,
            //     colocationName: null,
            //     action: "login",
            //     object: "user",
            //     validated: false,
            //     date: Date.now()
            // });
    
            // this.logService.createLog(log);
            throw new CustomError("Invalid email or password", "iep001", HTTPStatusCode.UNAUTHORIZED);
        }
    }


    async verifyRefreshToken(token: string): Promise<string> {
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
            const user = await this.userRepository.findUserById(decoded.userId);
            if (!user) {
                throw new CustomError("User not found", "unf005", HTTPStatusCode.UNAUTHORIZED);
        }
            return jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        } catch (error) {
            throw new CustomError("Invalid or expired refresh token", "ierf001", HTTPStatusCode.UNAUTHORIZED);
        }
    }
}
