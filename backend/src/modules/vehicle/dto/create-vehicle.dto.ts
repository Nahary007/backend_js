import { IsString, IsInt } from "class-validator";

export class CreateVehicleDto {
  @IsString()
  plateNumber: string;

  @IsString()
  ownerName: string;

  @IsInt()
  parkingId: number;

  @IsInt()
  duration: number;

  @IsString()
  startTime: string;
}
