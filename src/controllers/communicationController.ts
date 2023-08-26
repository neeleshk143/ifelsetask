import { Request, Response } from 'express';
import { Translator } from '../translations/translator';

export const sendMessage = (req: Request, res: Response) => {
    const message = req.body.message;
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');

    const translator = new Translator();

    let translatedMessage = '';
    if (sender === 'earth' && receiver === 'mars') {
        translatedMessage = translator.translateToNumeric(message);
    } else if (sender === 'mars' && receiver === 'earth') {
        translatedMessage = translator.translateToText(message);
    }

    res.json({ message: translatedMessage });
};
