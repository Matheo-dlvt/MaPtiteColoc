import { Expose } from "class-transformer";
import { IsNumber, IsString, IsEmail, IsBoolean } from "class-validator";
import { UserEntity } from "../../databases/mysql/user.entity";

export class UserPresenter {
  @Expose()
  @IsNumber()
  id: string;

  @Expose()
  @IsString()
  firstname: string;

  @Expose()
  @IsString()
  lastname: string;
  
  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsBoolean()
  isActive: boolean;
}