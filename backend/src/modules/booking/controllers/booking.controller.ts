import { Controller, Get, Post, Patch, Delete, Param, Body, Put } from "@nestjs/common";
import { BookingService } from "../services/booking.service";
import { CreateBookingDto } from "../dto/create-booking.dto";
import { UpdateBookingDto } from "../dto/update-booking.dto";

@Controller("bookings")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.bookingService.create(dto);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.bookingService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() dto: UpdateBookingDto) {
    return this.bookingService.update(+id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.bookingService.remove(+id);
  }
}
