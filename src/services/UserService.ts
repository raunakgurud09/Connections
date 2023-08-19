import apiClient from '@/lib/apiClient';

const getUsers = async (): Promise<any> => {
  try {
    const url = '/admin/static/users';
    // const { data } = await apiClient.get(url, { headers: { Authorization: `Bearer ${token}` } })
    const { data } = await apiClient.get(url);
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async (): Promise<any> => {
  try {
    const url = '/orders/';
    // const { data } = await apiClient.get(url, { headers: { Authorization: `Bearer ${token}` } })
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const getSearchedUsers = async (fields:  Record<string, any> = {}): Promise<any> => {
  try {
    const url = '/user/search';
    const { data } = await apiClient.get(url, { params: fields });

    console.log(data.data);
    return data.data;
  } catch (error) {
    // throw new Error(catchError(error));
    console.log(error);
    return;
  }
};

const UserServices = {
  getUsers,
  getOrders,
  getSearchedUsers,
};

export default UserServices;
