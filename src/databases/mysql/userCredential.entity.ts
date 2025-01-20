import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';


@Entity("userCredentials")
export class UserCredentialEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => UserEntity, (user) => user.id, { cascade: true })
    userId: number;

    @Column({ length: 50 })
    password_hash: string;
}
