import { Injectable } from '@nestjs/common';
import { user } from './user.model';

@Injectable()
export class UsersService {
  private users: user[] = [
    {
      id: "1",
      username: 'john',
      password: 'changeme',
      email: 'john@foxware.com.eg'
    },
    {
      id: "2",
      username: 'maria',
      password: 'guess',
      email: 'maria@foxware.com.eg'

    },
    {
      id: "3",
      username: 'nona',
      password: 'pw4nona',
      email: 'nona@foxware.com.eg'

    },
  ];

  //find a user by his id
  async findUser(userId: string): Promise<user> {
    return this.users.find(user => user.id === userId)
  }

  //fetch all valid users
  async fetchAll(): Promise<user[]> {
    return [...this.users]
  }
}