import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

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

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = { email: user.email, sub: user.id, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new BadRequestException('Missing email or password');
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const createdUser = await this.usersRepository.create({
        email,
        password: hashedPassword,
      });

      const payload = {
        email: createdUser.email,
        sub: createdUser.id,
        role: createdUser.role,
      };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email already exists');
      }

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new BadRequestException('Something went wrong');
    }
  }
}
