import { VehicleService } from "../services/vehicle.service";
import { CreateVehicleDto } from "../dto/create-vehicle.dto";
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UpdateVehicleDto } from "../dto/update-vehicle.dto";

@Controller("vehicles")
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) { }
    @Post()
    create(@Body() dto: CreateVehicleDto) {
        return this.vehicleService.create(dto);
    }

    @Get()
    findAll() {
        return this.vehicleService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateVehicleDto) {
        return this.vehicleService.update(+id, dto);
    }

    @Delete(":id")
    removeById(@Param("id") id: string) {
        return this.vehicleService.removeById(+id);
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


    @Get("parking/:parkingId")
    findByParking(@Param("parkingId") parkingId: string) {
        return this.vehicleService.findByParking(+parkingId);
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