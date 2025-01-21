import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class UserFinancePresenter {

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