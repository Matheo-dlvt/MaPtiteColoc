import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;
}
