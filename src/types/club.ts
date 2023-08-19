export interface IClub {
  name: string;
  address: string;
  timings: {
    opensAt: string;
    closesAt: string;
  };
  city?: string;
  is_fullcovered: boolean;
  terms_and_condition: string;
  description: string;
}
