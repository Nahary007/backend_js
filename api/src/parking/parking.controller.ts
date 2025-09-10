import { Controller, Get, Post, Body } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { Roles, RoleMatchingMode } from 'nest-keycloak-connect';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Get()
  @Roles({ roles: ['user', 'admin'] })
  getAll() {
    return this.parkingService.getAll();
  }

  @Post()
  @Roles({ roles: ['admin'], mode: RoleMatchingMode.ANY })
  add(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingService.add(createParkingDto);
  }
}
