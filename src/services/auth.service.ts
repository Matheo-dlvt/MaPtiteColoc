import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../databases/mongodb/user.model";
import { UserCredentialRepository } from '../repositories/userCredential.repository';

export class AuthService {
    private userRepository = new UserRepository();
    private UserCredentialRepository = new UserCredentialRepository();

    async login(email: string, password: string): Promise<{ accessToken: string; refreshToken: string; user: IUser }> {

        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error("Invalid email or password.");
        }

        const userCredential = await this.UserCredentialRepository.findUserCredentialByUserId(user._id);
        if (!userCredential) {
            throw new Error("Invalid email or password.");
        }

        const isPasswordValid = await bcrypt.compare(password, userCredential.password_hash);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password.");
        }

        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET!, { expiresIn: "7d" });

        return { accessToken, refreshToken, user };
    }


    async verifyRefreshToken(token: string): Promise<string> {
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
            const user = await this.userRepository.findUserById(decoded.userId);
            if (!user) {
                throw new Error("User not found.");
        }
            return jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
        } catch (error) {
            throw new Error("Invalid or expired refresh token.");
        }
    }
}
