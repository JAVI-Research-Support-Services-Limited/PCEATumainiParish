import express from 'express';
import {
  testMpesaToken,
  stkPush,
  stkCallback,
  getPaymentStatus
} from '../controllers/mpesa.controller.js';

const router = express.Router();

router.get('/test-credentials', testMpesaToken);
router.post('/stkpush', stkPush);
router.post('/callback', stkCallback);
router.get('/status/:checkoutRequestId', getPaymentStatus);

export default router;