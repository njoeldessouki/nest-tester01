import { Injectable, NotFoundException } from '@nestjs/common';
import { post } from './post.model';

@Injectable()
export class PostsServices {
  private posts: post[] = [];

  getPosts(): post[] {
    return this.posts;
  }

  addPost(title: string, task: string): string {
    const id = Math.floor(Math.random() + Date.now() + (this.posts.length + 1));
    if (
      Object.keys(title).length <= 1 ||
      (Object.keys(task).length <= 1 && title === '') ||
      task === ''
    ) {
      throw new NotFoundException({
        statusCode: 400,
        error: 'Bad Request',
        message: ['title or task inputs must contain data'],
      });
    }

    const newPost = new post(id, title, task);
    this.posts.push(newPost);
    return `post created successfully with system id ${newPost.id}`;
  }
}
