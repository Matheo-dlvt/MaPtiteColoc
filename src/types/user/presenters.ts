import { Expose } from "class-transformer";
import { IsNumber, IsString, IsEmail, IsBoolean } from "class-validator";
import { UserEntity } from "../../databases/mysql/user.entity";

export class UserPresenter {
  @Expose()
  @IsNumber()
  id: UserEntity['id'];

  @Expose()
  @IsString()
  firstname: UserEntity['firstname'];

  @Expose()
  @IsString()
  lastname: UserEntity['lastname'];
  
  @Expose()
  @IsEmail()
  email: UserEntity['email'];

  @Expose()
  @IsBoolean()
  isActive: boolean;
}