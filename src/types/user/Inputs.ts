import { Expose } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import { UserEntity } from "../../databases/mysql/user.entity";
import { UserCredentialEntity } from "../../databases/mysql/userCredential.entity";

export class userToCreateInput {
  @Expose()
  @IsString()
  firstname: string;

  @Expose()
  @IsString()
  lastname: string;
  
  @Expose()
  @IsEmail()
  email: string;
}
