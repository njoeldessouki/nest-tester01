import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsServices } from './Posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postservices: PostsServices) {}

  @Get()
  findAll() {
    return this.postservices.getPosts();
  }

  @Post()
  addNewPost(@Body('title') title: string, @Body('task') task: string) {
    return this.postservices.addPost(title, task);
  }
}
