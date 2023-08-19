// import { CartItem } from 'types';

import { CLUB_COMMISSION, CLUB_GST } from '../constants';

export default function calculateCartTotal(cartItems: any[]): {
  cartTotal: number;
  stripeTotal: number;
} {
  const total = cartItems.reduce(
    (prev, current) => prev + current.ticket?.price?.current * current.quantity,
    0
  );
  const cartTotal = parseFloat(total.toFixed(2));
  const stripeTotal = Number((total * 100).toFixed(2));
  return { cartTotal, stripeTotal };
}

export function calCartTotal(cartItems: any[]) {
  const total = cartItems.reduce((prev, current) => {
    return prev + current.price.current * current.qty;
  }, 0);

  const cartTotal = parseFloat(total.toFixed(2));
  
  const convenienceFee = Math.floor((cartTotal * CLUB_COMMISSION)*100)/100;

  const tax = Math.floor((convenienceFee * CLUB_GST)*100)/100;

  return { cartTotal, tax, convenienceFee };
}
