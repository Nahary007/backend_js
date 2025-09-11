import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Parking } from "src/modules/parking/entities/parking.entity";
import { Vehicle } from "src/modules/vehicle/entities/vehicle.entity";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Parking, (parking) => parking.bookings)
    parking: Parking;

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.bookings)
    vehicle: Vehicle;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;
}


