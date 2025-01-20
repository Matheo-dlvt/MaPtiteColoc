import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { ColocationEntity } from "./colocation.entity";
import { UserEntity } from "./user.entity";

@Entity("userFinances")
export class UserFinanceEntity {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => ColocationEntity, (colocation) => colocation.id, {cascade: true})
  colocationId: ColocationEntity;

  @ManyToOne(() => UserEntity, (user) => user.id, {cascade: true})
  userId: UserEntity;

  @Column()
  amountToPaid: number;

  @Column()
  totalPaid: number;
}
