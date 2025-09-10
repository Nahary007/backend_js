import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parking } from './entities/parking.entity';
import { CreateParkingDto } from './dto/create-parking.dto';

@Injectable()
export class ParkingService {
  constructor(
    @InjectRepository(Parking)
    private parkingRepository: Repository<Parking>,
  ) {}

  getAll(): Promise<Parking[]> {
    return this.parkingRepository.find();
  }

  add(createParkingDto: CreateParkingDto): Promise<Parking> {
    const parking = this.parkingRepository.create(createParkingDto);
    return this.parkingRepository.save(parking);
  }
}
