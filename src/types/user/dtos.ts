import { Expose } from "class-transformer";
import { IsString, IsEmail, IsArray, IsBoolean } from "class-validator";

export class UserToCreateDTO {

  @Expose()
  @IsString()
  firstname: string;

  @Expose()
  @IsString()
  lastname: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  password: string;
}
