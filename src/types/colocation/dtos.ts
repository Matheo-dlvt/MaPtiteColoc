import { IsNumber, IsString, IsArray, IsOptional } from "class-validator";
import { Expose } from "class-transformer";

export class ColocationToCreateDTO {

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

export class ColocationToUpdateDTO {

    @Expose()
    @IsString()
    @IsOptional()
    name: string;

    @Expose()
    @IsString()
    @IsOptional()
    adress: string;

    @Expose()
    @IsNumber()
    @IsOptional()
    surface: number;

    @Expose()
    @IsNumber()
    @IsOptional()
    rent: number;

    @Expose()
    @IsArray()
    @IsOptional()
    usersIds: string[];

    @Expose()
    @IsNumber()
    @IsOptional()
    totalAmount: number;
}

export class ColocationToSaveDTO {

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