import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("colocations")
export class ColocationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adress: string;

  @Column()
  surface: number;

  @Column()
  rent: number;

  @ManyToMany(() => UserEntity, (user) => user.id, {cascade: true})
  users: UserEntity[];
}
