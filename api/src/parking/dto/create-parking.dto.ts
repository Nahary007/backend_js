import { IsString, IsNumber } from 'class-validator';

export class CreateParkingDto {
  @IsString()
  name: string;

  @IsNumber()
  capacity: number;
}
