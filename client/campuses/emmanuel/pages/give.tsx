import React, { useState } from "react";
import ChurchInfo from "@/components/give/ChurchInfo";
import OffertoryForm from "@/components/give/OffertoryForm";
import SuccessModal from "@/components/give/SuccessModal";
import {
  Church,
  GivingType,
  PaymentMethod,
  OffertoryState,
} from "@/types/give";

const CHURCHES: Church[] = [
  {
    id: "st-luke",
    name: "St Luke Church",
    congregation: "Downtown Congregation",
    address: "123 Main Street, City",
    times: "Sun 9AM & 11AM",
    imageUrl:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "mwihoko",
    name: "Mwihoko Church",
    congregation: "North Congregation",
    address: "456 North Road, Town",
    times: "Sun 8AM & 10:30AM",
    imageUrl:
      "https://images.unsplash.com/photo-1548625361-195feee130d5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "emmanuel",
    name: "Emmanuel Church",
    congregation: "West Congregation",
    address: "789 West Avenue, Suburb",
    times: "Sun 7:30AM & 9:30AM",
    imageUrl:
      "https://images.unsplash.com/photo-1523050335456-adabbf72c766?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Give() {
  const [formData, setFormData] = useState<OffertoryState>({
    churchId: CHURCHES[0].id,
    givingType: GivingType.TITHE,
    amount: "",
    district: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    paymentMethod: PaymentMethod.MPESA,
    mpesaNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    cardName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{
    name: string;
    type: GivingType;
    amount: string;
  } | null>(null);

  const selectedChurch =
    CHURCHES.find((c) => c.id === formData.churchId) || CHURCHES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessData({
        name: formData.fullName || "Beloved Member",
        type: formData.givingType,
        amount: formData.amount,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <ChurchInfo church={selectedChurch} />
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <span className="material-icons">volunteer_activism</span>
                <h3 className="text-lg font-display">Faith, Love, Hope</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                PCEA Tumaini Parish welcomes your contribution. Your generosity
                supports our mission to spread the Gospel and serve the
                community.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <OffertoryForm
              formData={formData}
              setFormData={setFormData}
              churches={CHURCHES}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </main>

      {successData && (
        <SuccessModal {...successData} onClose={() => setSuccessData(null)} />
      )}
    </div>
  );
}
