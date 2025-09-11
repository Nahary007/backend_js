import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Parking } from "./entities/parking.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Parking])],
    // controllers: [ParkingController],
    // providers: [ParkingService],
    // exports: [ParkingService],
})

export class ParkingModule{}