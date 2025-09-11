import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Booking } from "./entities/booking.entity";
import { Parking } from "../parking/entities/parking.entity";
import { Vehicle } from "../vehicle/entities/vehicle.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Booking, Parking, Vehicle])],
    // controllers: [ParkingController],
    // providers: [ParkingService],
    // exports: [ParkingService],
})

export class BookingModule{}