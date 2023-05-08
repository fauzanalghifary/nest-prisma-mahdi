import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    if (!email || !password) {
      throw new BadRequestException('Missing email or password');
    }

    const user = await this.usersRepository.findOneByEmail(email);

    if (user.password !== password) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };

    // console.log(payload, 'ini payload');

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
