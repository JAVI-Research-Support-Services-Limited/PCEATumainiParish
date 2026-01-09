
export enum GivingType {
  TITHE = 'Tithe',
  OFFERING = 'Offering',
  THANKSGIVING = 'Thanksgiving',
  DEVELOPMENT = 'Development'
}

export enum PaymentMethod {
  MPESA = 'M-Pesa',
  CARD = 'Card'
}

export interface Church {
  id: string;
  name: string;
  campus: string;
  address: string;
  times: string;
  imageUrl: string;
}

export interface OffertoryState {
  churchId: string;
  givingType: GivingType;
  amount: string;
  district: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  paymentMethod: PaymentMethod;
  mpesaNumber: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  cardName: string;
}
