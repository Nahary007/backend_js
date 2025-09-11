import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "../entities/booking.entity";
import { Parking } from "../../parking/entities/parking.entity";
import { Vehicle } from "../../vehicle/entities/vehicle.entity";
import { CreateBookingDto } from "../dto/create-booking.dto";
import { UpdateBookingDto } from "../dto/update-booking.dto";

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking) private readonly bookingRepo: Repository<Booking>,
        @InjectRepository(Parking) private readonly parkingRepo: Repository<Parking>,
        @InjectRepository(Vehicle) private readonly vehicleRepo: Repository<Vehicle>,
    ) {}

    async create(dto: CreateBookingDto): Promise<Booking> {
        const parking = await this.parkingRepo.findOneBy({ id: dto.parkingId });
        const vehicle = await this.vehicleRepo.findOneBy({ id: dto.vehicleId });

        if (!parking) throw new NotFoundException(`Parking #${dto.parkingId} not found`);
        if (!vehicle) throw new NotFoundException(`Vehicle #${dto.vehicleId} not found`);

        const booking = this.bookingRepo.create({
            parking,
            vehicle,
            startTime: new Date(dto.startTime),
            endTime: new Date(dto.endTime),
        });

        return this.bookingRepo.save(booking);
    }

    async findAll(): Promise<Booking[]> {
        return this.bookingRepo.find({ relations: ["parking", "vehicle"] });
    }

    async findOne(id: number): Promise<Booking> {
        const booking = await this.bookingRepo.findOne({ where: { id }, relations: ["parking", "vehicle"] });
        if (!booking) throw new NotFoundException(`Booking #${id} not found`);
        return booking;
    }

    async update(id: number, dto: UpdateBookingDto): Promise<Booking> {
        const booking = await this.findOne(id);
        if (dto.startTime) booking.startTime = new Date(dto.startTime);
        if (dto.endTime) booking.endTime = new Date(dto.endTime);
        return this.bookingRepo.save(booking);
    }

    async remove(id: number): Promise<void> {
        const result = await this.bookingRepo.delete(id);
        if (result.affected === 0) throw new NotFoundException(`Booking #${id} not found`);
    }
}
