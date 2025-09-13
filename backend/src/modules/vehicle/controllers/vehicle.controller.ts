import { VehicleService } from "../services/vehicle.service";
import { CreateVehicleDto } from "../dto/create-vehicle.dto";
import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";

@Controller("vehicles")
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) {}
    @Post()
    create(@Body() dto: CreateVehicleDto) {
        return this.vehicleService.create(dto);
    } 
    @Get()
    findAll() {
        return this.vehicleService.findAll();
    }

    @Get("exists/:plateNumber")
    exists(@Param("plateNumber") plateNumber: string) {
        return this.vehicleService.exists(plateNumber);
    }

    @Get("plate/:plateNumber")
    findByPlate(@Param("plateNumber") plateNumber: string) {
        return this.vehicleService.findByPlate(plateNumber);
    }

    @Delete("plate/:plateNumber")
    removeByPlate(@Param("plateNumber") plateNumber: string) {
        return this.vehicleService.removeByPlate(plateNumber);
    }

    @Delete()
    clear() {
        return this.vehicleService.clear();
    }

    @Get("owner/:ownerName")
    findByOwner(@Param("ownerName") ownerName: string) {
        return this.vehicleService.findByOwner(ownerName);
    }
}