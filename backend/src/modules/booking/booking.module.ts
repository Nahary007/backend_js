import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Booking } from "./entities/booking.entity";
import { Parking } from "../parking/entities/parking.entity";
import { Vehicle } from "../vehicle/entities/vehicle.entity";
import { BookingService } from "./services/booking.service";
import { BookingController } from "./controllers/booking.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Booking, Parking, Vehicle])],
    controllers: [BookingController],
    providers: [BookingService],
    exports: [BookingService],
})
export class BookingModule {}
