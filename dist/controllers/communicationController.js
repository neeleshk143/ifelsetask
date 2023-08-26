"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const translator_1 = require("../translations/translator");
const sendMessage = (req, res) => {
    const message = req.body.message;
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');
    const translator = new translator_1.Translator();
    let translatedMessage = '';
    if (sender === 'earth' && receiver === 'mars') {
        translatedMessage = translator.translateToNumeric(message);
    }
    else if (sender === 'mars' && receiver === 'earth') {
        translatedMessage = translator.translateToText(message);
    }
    res.json({ message: translatedMessage });
};
exports.sendMessage = sendMessage;
