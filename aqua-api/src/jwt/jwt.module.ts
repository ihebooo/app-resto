import { Module,Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import {JwtServiceNew } from './jwt.service'
@Global()
@Module({
  imports : [
    JwtModule.register({
        secret: 'SECRET_KEY',
        signOptions: { expiresIn: '1h' },
      })
    ],
   exports : [JwtServiceNew],
   providers: [JwtServiceNew]

})
export class JwtModuleNew {}
