import { IsInt, IsNotEmpty, IsDateString } from "class-validator";

export class CreateBookingDto {
  @IsInt()
  @IsNotEmpty()
  parkingId: number;

  @IsInt()
  @IsNotEmpty()
  vehicleId: number;

  @IsDateString()
  @IsNotEmpty()
  startTime: string;

  @IsDateString()
  @IsNotEmpty()
  endTime: string;
}
