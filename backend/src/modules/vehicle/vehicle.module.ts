import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleService } from "./services/vehicle.service";
import { VehicleController } from "./controllers/vehicle.controller";
import { Parking } from "../parking/entities/parking.entity";

@Module({
    imports: [
    TypeOrmModule.forFeature([Vehicle, Parking]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})

export class VehicleModule {}