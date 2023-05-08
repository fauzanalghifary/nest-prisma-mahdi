import { LostFound, Status } from '@prisma/client';
import { UserEntity } from '../../users/entities/user.entity';

export class LostFoundEntity implements LostFound {
  constructor({ User, ...data }: Partial<LostFoundEntity>) {
    Object.assign(this, data);

    if (User) {
      this.User = new UserEntity(User);
    }
  }

  id: number;
  item: string;
  characteristic: string;
  status: Status;
  location: string;
  dateFound: Date;
  dateRetrieved: Date;

  userId: number | null;
  User: UserEntity | null;
}
