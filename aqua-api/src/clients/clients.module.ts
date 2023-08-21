import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from "./entities/client.entity"
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports : [TypeOrmModule.forFeature([Client]),
  PassportModule,
],
  controllers: [ClientsController],
  providers: [ClientsService,LocalStrategy, JwtStrategy]
})
export class ClientsModule {}
