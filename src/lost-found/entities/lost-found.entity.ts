import { LostFound, Status } from '@prisma/client';
import { UserEntity } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LostFoundEntity implements LostFound {
  constructor({ User, ...data }: Partial<LostFoundEntity>) {
    Object.assign(this, data);

    if (User) {
      this.User = new UserEntity(User);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  item: string;

  @ApiProperty()
  characteristic: string;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  location: string;

  @ApiProperty()
  dateFound: Date;

  @ApiProperty()
  dateRetrieved: Date;

  @ApiProperty()
  userId: number | null;

  @ApiProperty()
  User: UserEntity | null;
}
