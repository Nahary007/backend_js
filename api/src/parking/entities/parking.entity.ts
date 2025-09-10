import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column({ default: 0 })
  capacity: number;
}
