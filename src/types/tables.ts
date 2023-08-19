export interface IPrice {
  current: number;
  crossed: number;
}

export interface ITables {
  _id: string;
  name: string;
  price: IPrice;
  club: string;
  event: string;
  available: string;
}
