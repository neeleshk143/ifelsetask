"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const communicationController_1 = require("./controllers/communicationController");
const senderReceiverMiddleware_1 = require("./middleware/senderReceiverMiddleware");
const responseInterceptor_1 = require("./interceptors/responseInterceptor");
const router = express_1.default.Router();
router.use(senderReceiverMiddleware_1.senderReceiverMiddleware);
router.use(responseInterceptor_1.responseInterceptor);
router.post('/api/earth-mars-comm/message', communicationController_1.sendMessage);
exports.default = router;
