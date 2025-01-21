import { Expose } from "class-transformer";
import { IsEmail, IsString, IsBoolean, IsArray, IsOptional } from "class-validator";
import { UserEntity } from "../../databases/mysql/user.entity";
import { UserCredentialEntity } from "../../databases/mysql/userCredential.entity";

export class UserToCreateInput {
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

  @Expose()
  @IsArray()
  @IsOptional()
  colocations?: string[];
}

export class UserToUpdateInput {
  @Expose()
  @IsString()
  @IsOptional()
  firstname?: string;

  @Expose()
  @IsString()
  @IsOptional()
  lastname?: string;

  @Expose()
  @IsEmail()
  @IsOptional()
  email?: string;

  @Expose()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @Expose()
  @IsArray()
  @IsOptional()
  colocations?: string[];
}
