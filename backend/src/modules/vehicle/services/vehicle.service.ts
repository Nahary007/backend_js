import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vehicle } from "../entities/vehicle.entity";
import { CreateVehicleDto } from "../dto/create-vehicle.dto";
import { ReadVehicleDto } from "../dto/read-vehicle.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private repo: Repository<Vehicle>,
    ) {}
    
    create(dto: CreateVehicleDto) {
        const vehicle = this.repo.create(dto);
        return this.repo.save(vehicle);
    }

    async findAll(): Promise<ReadVehicleDto[]> {
    const vehicles = await this.repo.find();
    return plainToInstance(ReadVehicleDto, vehicles);
  }

  async findByPlate(plateNumber: string): Promise<ReadVehicleDto> {
    const vehicle = await this.repo.findOne({ where: { plateNumber } });
    return plainToInstance(ReadVehicleDto, vehicle);
  }

    removeByPlate(plateNumber: string) {
        return this.repo.delete({ plateNumber });
    }

    async clear() {
        const vehicles = await this.repo.find();
        await this.repo.remove(vehicles);
        return { message: "All vehicles have been removed" };
    }

    async exists(plateNumber: string) {
        const count = await this.repo.count({ where: { plateNumber } });
        return count > 0;
    }

    async findByOwner(ownerName: string) {
        return this.repo.find({ where: { ownerName } });
    }
}