import apiClient from '@/lib/apiClient';

const createPaymentOrder = async (payload: any): Promise<any> => {
  try {
    const url = '/orders/c';
    const res = await apiClient.post(url, payload);
    return res;
  } catch (error: any) {
    
    return { error: "order no created" };
  }
};

const createPaymentTOrder = async (payload: any): Promise<any> => {
  try {
    const url = '/torders/c';
    const res = await apiClient.post(url, payload);
    return res;
  } catch (error: any) {
    
    return { error: "order no created" };
  }
};

const OrderServices = {
  createPaymentOrder,
  createPaymentTOrder
};

export default OrderServices;
