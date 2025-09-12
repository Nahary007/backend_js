import { Exclude } from "class-transformer";

export class ReadVehicleDto {
  id: number;
  plateNumber: string;
  ownerName: string;
}
