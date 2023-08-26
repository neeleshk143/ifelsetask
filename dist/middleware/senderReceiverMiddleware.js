"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderReceiverMiddleware = void 0;
const senderReceiverMiddleware = (req, res, next) => {
    console.log('Sender:', req.header('x-sender'));
    console.log('Receiver:', req.header('x-receiver'));
    next();
};
exports.senderReceiverMiddleware = senderReceiverMiddleware;
