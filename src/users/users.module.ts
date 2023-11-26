import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { profileController } from './profile.controller';

@Module({
  controllers: [profileController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
