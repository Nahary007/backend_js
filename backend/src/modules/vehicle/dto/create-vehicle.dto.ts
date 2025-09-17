<<<<<<< HEAD
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVehicleDto {
    @IsString()
    @IsNotEmpty()
    plateNumber : string;

    @IsString()
    @IsNotEmpty()
    ownerName: string;
=======
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
>>>>>>> resolve_conflict
}
