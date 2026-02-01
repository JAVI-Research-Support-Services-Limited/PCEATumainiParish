import dotenv from 'dotenv';

// Load environment variables FIRST before anything else
dotenv.config();

import express from 'express';
import cors from 'cors';
import mpesaRoutes from './routes/mpesa.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/mpesa', mpesaRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`
========================================
Server running on port ${PORT}
M-Pesa Environment: ${process.env.MPESA_ENVIRONMENT || 'Not set'}
Callback URL: ${process.env.MPESA_CALLBACK_URL || 'Not set'}
========================================
  `);
});