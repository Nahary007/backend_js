import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vehicle } from "../entities/vehicle.entity";
import { CreateVehicleDto } from "../dto/create-vehicle.dto";
import { ReadVehicleDto } from "../dto/read-vehicle.dto";
import { plainToInstance } from "class-transformer";
import { Parking } from "src/modules/parking/entities/parking.entity";
import { UpdateVehicleDto } from "../dto/update-vehicle.dto";

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private repo: Repository<Vehicle>,

        @InjectRepository(Parking)
        private parkingRepo: Repository<Parking>,
    ) { }

    async create(dto: CreateVehicleDto): Promise<Vehicle> {
        const parking = await this.parkingRepo.findOneBy({ id: dto.parkingId });
        if (!parking) {
            throw new NotFoundException(`Parking #${dto.parkingId} not found`);
        }

        const vehicle = this.repo.create({
            plateNumber: dto.plateNumber,
            ownerName: dto.ownerName,
            startTime: new Date(dto.startTime),
            duration: dto.duration,
            parking: parking,
        });
        return this.repo.save(vehicle);
    }

    update(id: number, dto: UpdateVehicleDto) {
        return this.repo.update(id, dto);
    }


    async findAll(): Promise<ReadVehicleDto[]> {
        const vehicles = await this.repo.find();
        return plainToInstance(ReadVehicleDto, vehicles);
    }

    async findByParking(parkingId: number): Promise<Vehicle[]> {
        return this.repo.find({
            where: { parking: { id: parkingId } },
            relations: ["parking"],
        });
    }

    async findByPlate(plateNumber: string): Promise<ReadVehicleDto> {
        const vehicle = await this.repo.findOne({ where: { plateNumber } });
        return plainToInstance(ReadVehicleDto, vehicle);
    }

    async removeById(id: number): Promise<{ message: string }> {
        const result = await this.repo.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Vehicle #${id} not found`);
        }
        return { message: `Vehicle #${id} has been removed` };
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