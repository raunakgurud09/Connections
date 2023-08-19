import apiClient from '@/lib/apiClient';

const cashfreePayment = async (userId:string,name:string,phone:string,email: string,amount: string,orderId:string): Promise<any> => {
  try {
    const url = '/payment/cashfree-createOrder';
    const payload = {userId,name,email,phone,amount,orderId}
    const { data } = await apiClient.post(url, payload);
    console.log(data)
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const PaymentService = {
  cashfreePayment
}

export default PaymentService