import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Booking } from "src/modules/booking/entities/booking.entity";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plateNumber : string;

    @Column()
    ownerName: string;

    @OneToMany(() => Booking, (booking) => booking.vehicle)
    bookings: Booking[];
}
