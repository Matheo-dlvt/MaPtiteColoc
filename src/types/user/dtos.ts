import { Expose } from "class-transformer";
import { UserEntity } from "../../databases/mysql/user.entity";
import { IsString, IsEmail, IsArray, IsBoolean } from "class-validator";

export class UserToCreateDTO {
  @Expose()
  @IsString()
  _id: string;

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
  @IsBoolean()
  isActive: boolean;

  @Expose()
  @IsArray()
  colocations: string[];
}

export class UserCredentialDTO {
  @Expose()
  @IsString()
  userId: string;

  @Expose()
  @IsString()
  password: string;
}
