import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ClientsService } from '../../clients.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'client') {
  constructor(private readonly clientService: ClientsService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.clientService.validateUserCredentials(
      email,
      password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

