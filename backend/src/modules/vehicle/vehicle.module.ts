import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehicle } from "./entities/vehicle.entity";
import { VehicleService } from "./services/vehicle.service";
import { VehicleController } from "./controllers/vehicle.controller";
<<<<<<< HEAD

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
=======
import { Parking } from "../parking/entities/parking.entity";

@Module({
    imports: [
    TypeOrmModule.forFeature([Vehicle, Parking]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})

export class VehicleModule {}
>>>>>>> resolve_conflict
