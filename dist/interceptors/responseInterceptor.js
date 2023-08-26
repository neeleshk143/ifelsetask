"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseInterceptor = void 0;
const responseInterceptor = (req, res, next) => {
    const sender = req.header('x-sender');
    const receiver = req.header('x-receiver');
    if (sender === 'earth' && receiver === 'mars') {
        if (res.locals.data) {
            res.json(Object.assign({ message: 'Response from Mars' }, res.locals.data));
        }
        else {
            res.json({ message: 'Response from Mars' });
        }
    }
    else if (sender === 'mars' && receiver === 'earth') {
        if (res.locals.data) {
            res.json(Object.assign({ message: 'Response from Earth' }, res.locals.data));
        }
        else {
            res.json({ message: 'Response from Earth' });
        }
    }
    else {
        // If sender and receiver headers are not as expected, pass to next middleware
        console.log("Ab kya problem hai bhai");
        next();
    }
};
exports.responseInterceptor = responseInterceptor;
