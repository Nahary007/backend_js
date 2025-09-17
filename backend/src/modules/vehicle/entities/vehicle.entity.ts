import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Parking } from "../../parking/entities/parking.entity";

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  plateNumber: string;

  @Column()
  ownerName: string;

  @ManyToOne(() => Parking, (parking) => parking.vehicles, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "parkingId" })
  parking: Parking;

  @Column({ type: "timestamp", nullable: true })
  startTime: Date;

  @Column({ type: "int", nullable: true })
  duration: number;
}
