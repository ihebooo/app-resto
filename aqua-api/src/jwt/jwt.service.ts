import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtServiceNew {
  constructor(private readonly jwtService: JwtService) {}

  createToken(payload: any): string {
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): any {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (err) {
      // handle error
    }
  }
}
