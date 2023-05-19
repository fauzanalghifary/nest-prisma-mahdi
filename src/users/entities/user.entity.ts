import { User, Role } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { LostFoundEntity } from '../../lost-found/entities/lost-found.entity';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: Role | null;

  @Exclude()
  password: string;

  // @ApiProperty()
  // LostFound: LostFoundEntity[] | null;
}
