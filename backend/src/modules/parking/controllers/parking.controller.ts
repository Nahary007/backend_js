import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { ParkingService } from "../services/parking.service";
import { CreateParkingDto } from "../dto/create-parking.dto";
import { UpdateParkingDto } from "../dto/update-parking.dto";

@Controller('parkings')
export class ParkingController {
    constructor(private readonly parkingService: ParkingService) {}

    @Post()
    create(@Body() dto: CreateParkingDto) {
        return this.parkingService.create(dto);
    }

    @Get()
    findAll() {
        return this.parkingService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.parkingService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateParkingDto) {
        return this.parkingService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.parkingService.remove(+id);
    }
}