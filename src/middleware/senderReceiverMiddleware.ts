import { Request, Response, NextFunction } from 'express';

export const senderReceiverMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('Sender:', req.header('x-sender'));
    console.log('Receiver:', req.header('x-receiver'));
    next();
};
