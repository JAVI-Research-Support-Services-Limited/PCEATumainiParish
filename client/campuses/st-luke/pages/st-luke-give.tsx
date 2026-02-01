import React, { useState, useEffect } from 'react';
import Layout from '@/components/site/Layout';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const givingTypes = ['Tithe', 'Offering', 'Development Fund', 'MMF Fund'];

export default function StLukeGive() {
  const [givingType, setGivingType] = useState('Tithe');
  const [amount, setAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [district, setDistrict] = useState('');
  const [group, setGroup] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [pollingCount, setPollingCount] = useState(0);

  const normalizePhone = (value: string) => {
    let p = value.replace(/\s+/g, '');
    if (p.startsWith('0')) p = '254' + p.slice(1);
    if (p.startsWith('+254')) p = p.slice(1);
    return p;
  };

  const pollPaymentStatus = async () => {
    if (!checkoutId) return;

    console.log(`🔍 Polling payment status (attempt ${pollingCount + 1})...`);
    console.log('CheckoutID:', checkoutId);

    try {
      const res = await fetch(`${API_URL}/api/mpesa/status/${checkoutId}`);
      const data = await res.json();
      
      console.log('Poll response:', data);

      if (data.success && data.status === 'completed') {
        console.log('✅ Payment completed!');
        setSuccess(true);
        setLoading(false);
        setCheckoutId(null);
        setPollingCount(0);
      } else if (data.success && data.status === 'failed') {
        console.log('❌ Payment failed');
        setError(data.resultDesc || 'Payment failed. Please try again.');
        setLoading(false);
        setCheckoutId(null);
        setPollingCount(0);
      } else {
        // Still pending
        console.log('⏳ Payment still pending...');
        setPollingCount(prev => prev + 1);
        
        // Stop polling after 40 attempts (2 minutes)
        if (pollingCount >= 40) {
          console.log('⚠️ Polling timeout');
          setError('Payment is taking longer than expected. Please check with the church office.');
          setLoading(false);
          setCheckoutId(null);
          setPollingCount(0);
        } else {
          // Poll again in 3 seconds
          setTimeout(pollPaymentStatus, 3000);
        }
      }
    } catch (err) {
      console.error('Polling error:', err);
      setError('Error checking payment status. Please refresh the page.');
      setLoading(false);
      setCheckoutId(null);
      setPollingCount(0);
    }
  };

  // Start polling when checkoutId is set
  useEffect(() => {
    if (checkoutId) {
      pollPaymentStatus();
    }
  }, [checkoutId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    console.log('📝 Form submitted');

    if (!fullName || !amount || !phone) {
      setError('Please fill all required fields');
      return;
    }

    const formattedPhone = normalizePhone(phone);
    if (!/^2547\d{8}$/.test(formattedPhone)) {
      setError('Enter a valid Safaricom number (07XXXXXXXX)');
      return;
    }

    const paymentData = {
      phoneNumber: formattedPhone,
      amount: Number(amount),
      accountReference: givingType,
      transactionDesc: `St Luke Church - ${givingType}`,
      fullName,
      district: district || undefined,
      group: group || undefined,
    };

    console.log('💳 Initiating payment:', paymentData);

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/mpesa/stkpush`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();
      console.log('STK Push response:', data);

      if (!data.success) {
        console.error('STK Push failed:', data);
        setError(data.message || 'Payment failed');
        setLoading(false);
        return;
      }

      console.log('✅ STK Push sent!');
      console.log('CheckoutRequestID:', data.data.CheckoutRequestID);

      // Save checkoutId to start polling
      setCheckoutId(data.data.CheckoutRequestID);

      // Reset form fields
      setAmount('');
      setPhone('');
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  return (
    <Layout>
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow border p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Give to St Luke Church
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
            Support God's work through your giving
          </p>

          {success && (
            <div className="mb-4 bg-green-100 text-green-700 p-3 rounded">
              ✅ Payment successful! Thank you for your giving.
            </div>
          )}

          {error && (
            <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
              ⚠️ {error}
            </div>
          )}

          {loading && (
            <div className="mb-4 bg-blue-100 text-blue-700 p-3 rounded">
              ⏳ Processing payment... Please complete the M-Pesa prompt on your phone.
              {pollingCount > 0 && ` (${pollingCount * 3}s elapsed)`}
            </div>
          )}

          {/* Giving Type */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-white">
              Giving Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {givingTypes.map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setGivingType(type)}
                  disabled={loading}
                  className={`py-2 rounded border font-medium ${
                    givingType === type
                      ? 'bg-black text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  } disabled:opacity-50`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              placeholder="Full Name *"
              required
              disabled={loading}
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white disabled:opacity-50"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              placeholder="District (optional)"
              disabled={loading}
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white disabled:opacity-50"
              value={district}
              onChange={e => setDistrict(e.target.value)}
            />
            <input
              placeholder="Group (optional)"
              disabled={loading}
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white disabled:opacity-50"
              value={group}
              onChange={e => setGroup(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount (KES) *"
              required
              min="1"
              disabled={loading}
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white disabled:opacity-50"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <input
              placeholder="M-Pesa Phone (07XXXXXXXX) *"
              required
              disabled={loading}
              className="w-full border p-3 rounded dark:bg-gray-800 dark:text-white disabled:opacity-50"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded font-bold hover:bg-black/90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Give Now'}
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
}