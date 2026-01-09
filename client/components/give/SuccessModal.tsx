
import React from 'react';
import { GivingType } from '@/types/give';

interface SuccessModalProps {
  name: string;
  type: GivingType;
  amount: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ name, type, amount, onClose }) => {
  const gratitudeMessage = `Thank you, ${name}, for your faithful ${type.toLowerCase()} of KES ${amount}. Your generosity supports the work of the Gospel and blesses the community. May the Lord multiply your blessings abundantly.`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center relative animate-scale-up">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-icons text-5xl">check_circle</span>
        </div>

        <h3 className="text-2xl font-display text-gray-900 mb-2">Giving Successful!</h3>
        <p className="text-gray-500 mb-6 font-sans font-medium">Thank you for your {type} of KES {amount}.</p>

        <div className="bg-gray-50 p-6 rounded-xl mb-8 relative italic text-gray-700 leading-relaxed border border-gray-100">
          <span className="material-icons absolute -top-3 -left-1 text-gray-200 text-4xl">format_quote</span>
          <p className="font-sans">{gratitudeMessage}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-black text-white py-4 rounded-xl font-sans font-bold hover:bg-gray-800 transition-colors shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
