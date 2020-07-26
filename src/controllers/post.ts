import { excuteQuery, makeResultMessage, QueryResult } from './common'
import { Request, Response } from 'express';

import { Post } from '../types/Post';

export async function getPosts(req: Request, res: Response): Promise<Response> {
  const result = await excuteQuery('SELECT * FROM posts');
  return res.json(result);
}

export async function getPost(req: Request, res: Response): Promise<Response> {
  const id = req.params.postId;
  const result = await excuteQuery('SELECT * FROM posts WHERE id = ?', [id])
  return res.json(result);
}

export async function createPost(req: Request, res: Response) {
  const newPost: Post = req.body;
  const result = await excuteQuery('INSERT INTO posts SET ?', [newPost])
  const message = makeResultMessage('Post Create', (result as QueryResult))
  return res.json(message)
}

export async function deletePost(req: Request, res: Response) {
  const id = req.params.postId;
  const result = await excuteQuery('DELETE FROM posts WHERE id = ?', [id])
  const message = makeResultMessage('Post Delete', (result as QueryResult))
  return res.json(message)
}

export async function updatePost(req: Request, res: Response) {
  const id = req.params.postId;
  const updatePost: Post = req.body;
  const result = await excuteQuery('UPDATE posts SET ? WHERE id = ?', [updatePost, id])
  const message = makeResultMessage('Post Update', (result as QueryResult))
  return res.json(message)
}
