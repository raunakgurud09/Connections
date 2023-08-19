import apiClient from '@/lib/apiClient';
import { catchError } from '@/utils/catchError';

const getClubTickets = async (id: string): Promise<any> => {
  try {
    const url = `/ticket/${id}`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getEventTicketsById = async (id: string): Promise<any> => {
  try {
    const url = `/ticket/c/${id}`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const TicketService = {
  getClubTickets,
  getEventTicketsById,
};

export default TicketService;
