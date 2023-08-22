import { Request, Response, NextFunction } from 'express';

export function validateContactData(req: Request, res: Response, next: NextFunction) {
  const { email, phoneNumber } = req.body;

  if (typeof email !== 'string' || typeof phoneNumber !== 'string') {
    return res.status(400).json({ error: 'Both email and phoneNumber must be strings' });
  }

  if (!email.trim() || !phoneNumber.trim()) {
    return res.status(400).json({ error: 'Both email and phoneNumber are mandatory' });
  }
  next();
}
