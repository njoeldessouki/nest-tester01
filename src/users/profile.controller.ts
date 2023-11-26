import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './user.model';

@Controller('profile')
export class profileController {
  constructor(private usersService: UsersService) {};

  //get user by his id
  @Get(':id')
  getUser(@Param() params: any):Promise<user> {
    return this.usersService.findUser(params.id)
  }
  //get all valid users
  @Get()
  getAllUsers():Promise<user[]> {
    return this.usersService.fetchAll()
  }
}
