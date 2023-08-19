import apiClient from '@/lib/apiClient';
import { catchError } from '@/utils/catchError';

const getClubEventsByDate = async (
  id: string
  // date = '12/2/1200'
): Promise<any> => {
  try {
    const url = `/club/${id}/events`;
    const { data } = await apiClient.get(url);
    return data.data.events;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getEventById = async (id: string): Promise<any> => {
  try {
    const url = `/event/${id}`;
    const { data } = await apiClient.get(url);
    console.log(data)
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const EventService = {
  getClubEventsByDate,
  getEventById,
};

export default EventService;
