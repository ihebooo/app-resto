import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(private readonly adminService: AdminService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.adminService.validateUserCredentials(
      username,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
