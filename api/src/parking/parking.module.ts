import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { Parking } from './entities/parking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parking])],
  providers: [ParkingService],
  controllers: [ParkingController],
  exports: [ParkingService],
})
export class ParkingModule {}
