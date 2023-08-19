export interface IPrice {
  current: number;
  crossed: number;
}

export interface ITicket {
  _id: string;
  name: string;
  club: string;
  event: string;
  available: string;
  price: IPrice;
}
