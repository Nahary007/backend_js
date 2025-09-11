import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ParkingModule } from "./modules/parking/parking.module";
import { VehicleModule } from "./modules/vehicle/vehicle.module";
import { BookingModule } from "./modules/booking/booking.module";

@Module({
  imports: [
    // Charge le fichier .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configuration de TypeOrm
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // Modules personnalisés
    ParkingModule,
    VehicleModule,
    BookingModule,
  ],
})
export class AppModule {}
