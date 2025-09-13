import { IsNotEmpty, IsString } from "class-validator";

export class CreateVehicleDto {
    @IsString()
    @IsNotEmpty()
    plateNumber : string;

    @IsString()
    @IsNotEmpty()
    ownerName: string;
}
