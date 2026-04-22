export enum GivingType {
  TITHE = "Tithe",
  OFFERTORY = "Offertory",
  PROJECT = "Project",
  OTHER = "Other",
}

export enum PaymentMethod {
  MPESA = "M-Pesa",
  CARD = "Card",
}

export interface Church {
  id: string;
  name: string;
  congregation: string; // Added this property to resolve TS2353 error
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
