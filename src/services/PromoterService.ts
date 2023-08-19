import apiClient from '@/lib/apiClient';
import { catchError } from '@/utils/catchError';
import { TPromoter } from 'src/types/promoter';
// import { API_URL } from '../constants';

const getClubPromoter = async () => {
  try {
    const url = `/promoter/`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getSinglePromoter = async (promo_code: string, club: string) => {
  try {
    const url = `/promoter/promo_code`;
    const payload = { promo_code: promo_code, clubId: club };
    const { data } = await apiClient.post(url, payload);
    return data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const addClubPromoter = async (body: TPromoter) => {
  try {
    const url = `/promoter/`;
    // console.log(body, url);
    const { data } = await apiClient.post(url, { userId: body._id, body });
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const PromoterServices = {
  getClubPromoter,
  addClubPromoter,
  getSinglePromoter,
};

export default PromoterServices;
