import express from 'express';
import { sendMessage } from './controllers/communicationController';
import { senderReceiverMiddleware } from './middleware/senderReceiverMiddleware';
import { responseInterceptor } from './interceptors/responseInterceptor';

const router = express.Router();

router.use(senderReceiverMiddleware);
router.use(responseInterceptor);
router.post('/api/earth-mars-comm/message', sendMessage);

export default router;
