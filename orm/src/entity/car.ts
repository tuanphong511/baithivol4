import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    carCompany: string;
    @Column({type: 'varchar', length: 255})
    detail: string
}
