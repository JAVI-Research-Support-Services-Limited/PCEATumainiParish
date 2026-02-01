import express from 'express';
import cors from 'cors';
import { ConvexHttpClient } from 'convex/browser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Convex client
const convex = new ConvexHttpClient(process.env.VITE_CONVEX_URL);

app.use(cors());
app.use(express.json());

// M-Pesa callback endpoint
app.post('/api/mpesa/callback', async (req, res) => {
  try {
    console.log('M-Pesa Callback Received:', JSON.stringify(req.body, null, 2));

    const { Body } = req.body;
    const { stkCallback } = Body;

    const {
      CheckoutRequestID,
      ResultCode,
      ResultDesc,
    } = stkCallback;

    let mpesaReceiptNumber = '';
    let transactionDate = '';

    if (ResultCode === 0 && stkCallback.CallbackMetadata) {
      const metadata = stkCallback.CallbackMetadata.Item;
      
      mpesaReceiptNumber = metadata.find(
        (item) => item.Name === 'MpesaReceiptNumber'
      )?.Value || '';
      
      transactionDate = metadata.find(
        (item) => item.Name === 'TransactionDate'
      )?.Value || '';
    }

    // Update payment status in Convex
    await convex.mutation('functions/updatePaymentStatus:updatePaymentStatus', {
      checkoutRequestId: CheckoutRequestID,
      status: ResultCode === 0 ? 'completed' : 'failed',
      mpesaReceiptNumber: mpesaReceiptNumber || undefined,
      transactionDate: transactionDate ? String(transactionDate) : undefined,
      resultDesc: ResultDesc,
    });

    console.log(`Payment ${CheckoutRequestID} updated: ${ResultCode === 0 ? 'SUCCESS' : 'FAILED'}`);

    res.status(200).json({
      ResultCode: 0,
      ResultDesc: 'Accepted',
    });
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({
      ResultCode: 1,
      ResultDesc: 'Internal error',
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`M-Pesa callback server running on port ${PORT}`);
  console.log(`Callback URL: http://localhost:${PORT}/api/mpesa/callback`);
});