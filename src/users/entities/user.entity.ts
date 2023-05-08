import { User, Role } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { UserRole } from '../enums/user-role.enum';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  id: number;
  email: string;
  role: Role | null;

  @Exclude()
  password: string;
}
