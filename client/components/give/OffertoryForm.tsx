
import React from 'react';
import { Church, GivingType, PaymentMethod, OffertoryState } from '@/types/give';

interface OffertoryFormProps {
  formData: OffertoryState;
  setFormData: React.Dispatch<React.SetStateAction<OffertoryState>>;
  churches: Church[];
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const OffertoryForm: React.FC<OffertoryFormProps> = ({
  formData,
  setFormData,
  churches,
  onSubmit,
  isSubmitting
}) => {
  const updateField = (field: keyof OffertoryState, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center space-x-4 mb-8">
        <div className="bg-black text-white p-3 rounded-lg shadow-sm">
          <span className="material-icons">account_balance_wallet</span>
        </div>
        <div>
          <h2 className="text-2xl font-display text-gray-900">Give Your Offering</h2>
          <p className="text-gray-500 text-sm font-sans">Direct your contribution to your specific church account</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        {/* Church Selection */}
        <div>
          <label className="block text-sm font-sans font-bold text-gray-900 mb-3 uppercase tracking-wider">Select Church</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {churches.map((church) => (
              <div
                key={church.id}
                onClick={() => updateField('churchId', church.id)}
                className={`relative rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 border-2 ${
                  formData.churchId === church.id
                    ? 'bg-black text-white border-black shadow-lg scale-[1.02]'
                    : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'
                }`}
              >
                {formData.churchId === church.id && (
                  <div className="absolute top-2 right-2 bg-white text-black rounded-full p-0.5">
                    <span className="material-icons text-sm block font-bold">check</span>
                  </div>
                )}
                <div className={`p-3 rounded-full mb-3 ${formData.churchId === church.id ? 'bg-white/20' : 'bg-gray-100 text-gray-600'}`}>
                  <span className="material-icons">church</span>
                </div>
                <h4 className="font-sans font-bold text-sm leading-tight">{church.name}</h4>
                <p className={`text-[11px] mt-1 font-sans font-medium ${formData.churchId === church.id ? 'text-white/70' : 'text-gray-500'}`}>
                  {church.congregation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Giving Type */}
        <div>
          <label className="block text-sm font-sans font-bold text-gray-900 mb-3 uppercase tracking-wider">Giving Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.values(GivingType).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField('givingType', type)}
                className={`py-2.5 px-4 rounded-lg text-sm font-sans font-bold border transition-all ${
                  formData.givingType === type
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Amount & District */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Amount (KES)</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400 sm:text-sm font-sans font-bold">KES</span>
              </div>
              <input
                required
                type="number"
                placeholder="0.00"
                className="focus:ring-black focus:border-black block w-full pl-12 pr-4 sm:text-lg border-gray-300 rounded-lg py-3 font-sans font-bold"
                value={formData.amount}
                onChange={(e) => updateField('amount', e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-sans font-bold text-gray-900 mb-2">District Name</label>
            <input
              type="text"
              placeholder="e.g. Bethany"
              className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-3 font-sans font-medium"
              value={formData.district}
              onChange={(e) => updateField('district', e.target.value)}
            />
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Full Name</label>
            <input
              required
              type="text"
              placeholder="Your Name"
              className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-3 font-sans font-medium"
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-sans font-bold text-gray-900 mb-2">Phone Number</label>
            <input
              required
              type="tel"
              placeholder="+254..."
              className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-3 font-sans font-medium"
              value={formData.phoneNumber}
              onChange={(e) => updateField('phoneNumber', e.target.value)}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-sans font-bold text-gray-900 mb-3 uppercase tracking-wider">Payment Method</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => updateField('paymentMethod', PaymentMethod.MPESA)}
              className={`flex items-center justify-center space-x-2 py-4 px-4 rounded-xl text-sm font-sans font-bold border-2 transition-all ${
                formData.paymentMethod === PaymentMethod.MPESA
                  ? 'bg-gray-100 text-black border-black shadow-sm'
                  : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="material-icons">smartphone</span>
              <span>M-Pesa</span>
            </button>
            <button
              type="button"
              onClick={() => updateField('paymentMethod', PaymentMethod.CARD)}
              className={`flex items-center justify-center space-x-2 py-4 px-4 rounded-xl text-sm font-sans font-bold border-2 transition-all ${
                formData.paymentMethod === PaymentMethod.CARD
                  ? 'bg-gray-100 text-black border-black shadow-sm'
                  : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="material-icons">payments</span>
              <span>Card</span>
            </button>
          </div>
        </div>

        {/* Dynamic Payment Specific Fields */}
        <div className="duration-300 ease-in-out">
          {formData.paymentMethod === PaymentMethod.MPESA ? (
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 animate-fade-in">
              <label className="block text-sm font-sans font-bold text-gray-700 mb-2 uppercase tracking-wide">M-Pesa Number</label>
              <input
                required
                type="tel"
                placeholder="07XX XXX XXX"
                className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-3 font-sans font-bold"
                value={formData.mpesaNumber}
                onChange={(e) => updateField('mpesaNumber', e.target.value)}
              />
              <p className="mt-3 text-xs text-gray-500 font-sans font-medium italic">
                A secure STK push will be triggered to your phone.
              </p>
            </div>
          ) : (
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-5 animate-fade-in">
              <h4 className="text-sm font-sans font-bold text-gray-900 uppercase tracking-widest flex items-center space-x-2 mb-2">
                <span className="material-icons text-sm">lock</span>
                <span>Enter Card Details</span>
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-sans font-bold text-gray-500 mb-1 uppercase tracking-wider">Cardholder Name</label>
                  <input
                    required
                    type="text"
                    placeholder="NAME ON CARD"
                    className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 font-sans font-bold uppercase placeholder:text-gray-300"
                    value={formData.cardName}
                    onChange={(e) => updateField('cardName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans font-bold text-gray-500 mb-1 uppercase tracking-wider">Card Number</label>
                  <input
                    required
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 font-mono font-bold tracking-widest placeholder:text-gray-300"
                    value={formData.cardNumber}
                    onChange={(e) => updateField('cardNumber', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-sans font-bold text-gray-500 mb-1 uppercase tracking-wider">Expiry Date</label>
                    <input
                      required
                      type="text"
                      placeholder="MM / YY"
                      className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 font-mono font-bold text-center placeholder:text-gray-300"
                      value={formData.cardExpiry}
                      onChange={(e) => updateField('cardExpiry', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans font-bold text-gray-500 mb-1 uppercase tracking-wider">CVV</label>
                    <input
                      required
                      type="text"
                      placeholder="123"
                      maxLength={3}
                      className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 font-mono font-bold text-center placeholder:text-gray-300"
                      value={formData.cardCvv}
                      onChange={(e) => updateField('cardCvv', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-2 bg-black text-white py-4 px-4 rounded-xl text-base font-bold shadow-xl transition-all active:scale-[0.98] ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-900'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="font-sans">Processing Offering...</span>
              </div>
            ) : (
              <>
                <span className="material-icons">volunteer_activism</span>
                <span className="uppercase tracking-widest font-black font-sans">Give Now</span>
              </>
            )}
          </button>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] text-gray-400 font-sans font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-1.5">
              <span className="material-icons text-[14px] text-gray-400">lock_outline</span>
              <span>Encrypted Transaction</span>
            </div>
            <span className="hidden sm:inline text-gray-200">|</span>
            <div className="flex items-center space-x-1.5">
              <span className="material-icons text-[14px] text-gray-400">receipt</span>
              <span>Digital Receipt</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OffertoryForm;
