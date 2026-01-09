
export interface GoalData {
  id: string;
  title: string;
  current: number;
  goal: number;
  status: 'On Track' | 'In Progress' | 'Active';
  icon: string;
}

export interface ChartDataPoint {
  month: string;
  amount: number;
}

export interface StatData {
  label: string;
  value: string;
  change?: string;
  icon: string;
  subtext?: string;
}

export interface DonationInput {
  name: string;
  district: string;
  givingType: string;
  amount: string;
}

export interface OfflineDonation extends DonationInput {
  id: string;
  timestamp: number;
}
