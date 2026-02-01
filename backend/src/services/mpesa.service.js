import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Must be at the top

// DEBUG: Log what's being loaded
console.log("M-Pesa Environment Variables:");
console.log("MPESA_ENV:", process.env.MPESA_ENV);
console.log("MPESA_CONSUMER_KEY:", process.env.MPESA_CONSUMER_KEY ? "Set" : "Missing");
console.log("MPESA_CONSUMER_SECRET:", process.env.MPESA_CONSUMER_SECRET ? "Set" : "Missing");
console.log("MPESA_SHORTCODE:", process.env.MPESA_SHORTCODE);
console.log("MPESA_CALLBACK_URL:", process.env.MPESA_CALLBACK_URL);

const {
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CALLBACK_URL,
  MPESA_ENV
} = process.env;

if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET) {
  throw new Error("MPESA_CONSUMER_KEY or MPESA_CONSUMER_SECRET is not set in .env");
}

if (!MPESA_SHORTCODE || !MPESA_PASSKEY || !MPESA_CALLBACK_URL) {
  throw new Error("MPESA_SHORTCODE, MPESA_PASSKEY, or MPESA_CALLBACK_URL not set in .env");
}

const baseURL =
  MPESA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

// 🔍 DEBUG: Log the final baseURL
console.log("Base URL:", baseURL);
console.log("========================================\n");

/* ==========================
   Get Access Token
   ========================== */
export const getMpesaAccessToken = async () => {
  try {
    const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString(
      "base64"
    );

    const response = await axios.get(
      `${baseURL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: {
          Authorization: `Basic ${auth}`
        }
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("MPESA TOKEN ERROR:", error.response?.data || error.message);
    throw new Error("Failed to generate M-Pesa access token");
  }
};

/* ==========================
   Initiate STK Push
   ========================== */
export const initiateStkPush = async ({
  phone,
  amount,
  accountReference = "Donation",
  transactionDesc = "STK Push Payment"
}) => {
  try {
    if (!phone || !amount) throw new Error("Phone and amount are required for STK push");

    // Format phone to 2547XXXXXXXX
    let formattedPhone = phone.replace(/\s+/g, "");
    if (formattedPhone.startsWith("0")) formattedPhone = "254" + formattedPhone.slice(1);
    if (formattedPhone.startsWith("+254")) formattedPhone = formattedPhone.slice(1);

    const token = await getMpesaAccessToken();

    const timestamp = new Date()
      .toISOString()
      .replace(/[-:TZ.]/g, "")
      .slice(0, 14);

    const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString(
      "base64"
    );

    const payload = {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: formattedPhone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc
    };

    const response = await axios.post(`${baseURL}/mpesa/stkpush/v1/processrequest`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    return response.data;
  } catch (error) {
    console.error("STK PUSH ERROR:", error.response?.data || error.message);
    throw error;
  }
};