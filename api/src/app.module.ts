import { Module, CanActivate, Injectable, ExecutionContext  } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingModule } from './parking/parking.module';
import {
  KeycloakConnectModule,
  AuthGuard,
  ResourceGuard,
  RoleGuard,
  PolicyEnforcementMode,
  TokenValidation,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { keycloakConfig } from './config/keycloak.config';
import { Parking } from './parking/entities/parking.entity';

@Injectable()
class NoAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    return true; // Always allow
  }
}

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: keycloakConfig.authServerUrl,
      realm: keycloakConfig.realm,
      clientId: keycloakConfig.clientId,
      secret: keycloakConfig.secret,
      policyEnforcement: PolicyEnforcementMode.ENFORCING,
      tokenValidation: TokenValidation.ONLINE,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'parking',
      password: 'parking',
      database: 'parkingdb',
      entities: [Parking],
      synchronize: true,
    }),
    ParkingModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: ResourceGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {}
