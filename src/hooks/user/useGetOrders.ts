import UserServices from '@/services/UserService';
import useSWR from 'swr';
import { useUser } from './useUser';

export const useGetOrders = () => {
  const { data: user } = useUser();

  const value = user ? '/api/orders' : null;

  const { data, error } = useSWR(value, UserServices.getOrders);

  const isLoading = !data && !error;

  return {
    error,
    data: data,
    isLoading,
  };
};
