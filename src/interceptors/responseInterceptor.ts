import { Request, Response, NextFunction } from 'express';

export const responseInterceptor = (req: Request, res: Response, next: NextFunction) => {
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');
    
    if (sender === 'earth' && receiver === 'mars') {
        if (res.locals.data) {
            res.json({ message: 'Response from Mars', ...res.locals.data });
        } else {
            res.json({ message: 'Response from Mars' });
        }
    } else if (sender === 'mars' && receiver === 'earth') {
        if (res.locals.data) {
            res.json({ message: 'Response from Earth', ...res.locals.data });
        } else {
            res.json({ message: 'Response from Earth' });
        }
    } else {
        // If sender and receiver headers are not as expected, pass to next middleware
        console.log("Ab kya problem hai bhai")
        next();
    }
};
