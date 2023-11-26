import { Module } from '@nestjs/common';
import { PostsController } from './Posts.controller';
import { PostsServices } from './Posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsServices],
})
export class PostsModule {}
