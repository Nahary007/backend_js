import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vehicle } from "../../vehicle/entities/vehicle.entity";

@Entity()
export class Parking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    capacity: number;

    @OneToMany(() => Vehicle, (vehicle) => vehicle.parking)
    vehicles: Vehicle[];
}
