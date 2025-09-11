import { IsInt, IsNotEmpty } from "class-validator";

export class DeleteBookingDto {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
