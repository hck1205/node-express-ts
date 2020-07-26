import { Request, Response } from 'express';

export function indexWelcom(req: Request, res: Response): Response {
  return res.json('Welcom to my API');
}
