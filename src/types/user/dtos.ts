import { Expose } from "class-transformer";
import { UserEntity } from "../../databases/mysql/user.entity";
import { IsString, IsEmail } from "class-validator";

export class UserToCreateDTO {
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
  @IsString()
  password: string;
}