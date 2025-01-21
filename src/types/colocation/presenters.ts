import { IsNumber, IsString, IsArray, IsOptional } from "class-validator";
import { Expose } from "class-transformer";

export class ColocationPresenter {
    
    @Expose()
    @IsString()
    name: string;

    @Expose()
    @IsString()
    adress: string;

    @Expose()
    @IsNumber()
    surface: number;

    @Expose()
    @IsNumber()
    rent: number;

    @Expose()
    @IsArray()
    usersIds: string[];

    @Expose()
    @IsNumber()
    totalAmount: number;
}