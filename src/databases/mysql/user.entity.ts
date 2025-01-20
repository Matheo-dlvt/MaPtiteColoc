import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, EntitySchema } from "typeorm";


@Entity("users")
export class UserEntity {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column({ length: 50 })
  firstname: string;

  @Expose()
  @Column({ length: 50 })
  lastname: string;

  @Expose()
  @Column({ unique: true })
  email: string;

  @Expose()
  @Column({ default: true })
  isActive: boolean;
}
