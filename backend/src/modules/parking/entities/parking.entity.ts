import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Booking } from "src/modules/booking/entities/booking.entity";

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

    @OneToMany(() => Booking, (booking) => booking.parking)
    bookings: Booking[];
}

