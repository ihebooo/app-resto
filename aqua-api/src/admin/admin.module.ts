import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Admin } from "./entities/admin.entity"
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports : [
    TypeOrmModule.forFeature([Admin]),    
    PassportModule,
  ],
  controllers: [AdminController],
  providers: [AdminService,LocalStrategy, JwtStrategy]
})
export class AdminModule {}
