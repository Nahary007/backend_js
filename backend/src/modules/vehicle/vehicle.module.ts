import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehicle } from "./entities/vehicle.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Vehicle])],
    // controllers: [ParkingController],
    // providers: [ParkingService],
    // exports: [ParkingService],
})

export class VehicleModule{}