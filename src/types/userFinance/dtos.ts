import { Expose } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class UserFinanceToCreateDTO {

    @Expose()
    @IsString()
    colocationId: string;

    @Expose()
    @IsString()
    userId: string;

    @Expose()
    @IsNumber()
    amountToPaid: number;

    @Expose()
    @IsNumber()
    totalPaid: number;
}

export class UserFinanceToUpdateDTO {

    @Expose()
    @IsString()
    @IsOptional()
    colocationId: string;

    @Expose()
    @IsString()
    @IsOptional()
    userId: string;

    @Expose()
    @IsNumber()
    @IsOptional()
    amountToPaid: number;

    @Expose()
    @IsNumber()
    @IsOptional()
    totalPaid: number;
}

export class UserFinanceToSaveDTO {

    @Expose()
    @IsString()
    colocationId: string;

    @Expose()
    @IsString()
    userId: string;

    @Expose()
    @IsNumber()
    amountToPaid: number;

    @Expose()
    @IsNumber()
    totalPaid: number;
}