import { IsNotEmpty, IsString, IsInt, Min } from "class-validator";

export class CreateParkingDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsInt()
    @Min(1)
    capacity: number;
}