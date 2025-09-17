import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Parking } from "../entities/parking.entity";
import { CreateParkingDto } from "../dto/create-parking.dto";
import { UpdateParkingDto } from "../dto/update-parking.dto";

@Injectable()
export class ParkingService {
    constructor(
        @InjectRepository(Parking)
        private repo: Repository<Parking>,
    ) {}

    create(dto: CreateParkingDto) {
        const parking = this.repo.create(dto);
        return this.repo.save(parking);
    }

    findAll() {
        return this.repo.find();
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id } });
    }

    update(id: number, dto: UpdateParkingDto) {
        return this.repo.update(id, dto);
    }

    remove(id: number) {
        return this.repo.delete(id);
    }

}