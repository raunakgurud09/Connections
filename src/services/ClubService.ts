import apiClient from '@/lib/apiClient';
import { catchError } from '@/utils/catchError';
import { API_URL } from '../constants';

const getAllClubs = async (): Promise<any> => {
  try {
    const url = `${API_URL}/club/`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getMyClub = async (): Promise<any> => {
  try {
    const url = `/club/my-club`;
    const { data } = await apiClient.get(url);
    return data.data[0];
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getClubCarouselImages = async (): Promise<any> => {
  try {
    const url = `/club/my-club`;
    const { data } = await apiClient.get(url);

    return data.data[0]?.carousel_images;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getClubById = async (id: string): Promise<any> => {
  try {
    const url = `/club/${id}`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getClubTickets = async (clubId: string): Promise<any> => {
  try {
    const url = `/ticket/${clubId}`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const getClubTables = async (clubId: string): Promise<any> => {
  try {
    const url = `/tables/c/${clubId}`;
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const updateClubInfo = async (clubId: string, payload: any): Promise<any> => {
  try {
    Object.keys(payload).forEach((key) => {
      if (payload[key] === '') {
        delete payload[key];
      }
    });

    const url = `club/${clubId}`;
    const { data } = await apiClient.put(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const createClubTicket = async (payload: any): Promise<any> => {
  try {
    const url = `ticket/`;

    const { data } = await apiClient.post(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const uploadClubLogo = async (clubId: string, payload: any): Promise<any> => {
  try {
    const url = `club/${clubId}/upload-logo`;

    const { data } = await apiClient.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const uploadClubCarouselImage = async (
  clubId: string,
  payload: any
): Promise<any> => {
  try {
    const url = `club/${clubId}/carousel-image`;

    const { data } = await apiClient.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const updateClubTicket = async (clubId: string, payload: any) => {
  Object.keys(payload).forEach((key) => {
    if (payload[key] === '') {
      delete payload[key];
    }
  });
  try {
    const url = `ticket/${clubId}/`;
    const { data } = await apiClient.put(url, payload);

    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const deleteClubTicket = async (clubId: string, payload: any) => {
  Object.keys(payload).forEach((key) => {
    if (payload[key] === '') {
      delete payload[key];
    }
  });
  try {
    const url = `ticket/d/${clubId}/`;

    console.log(url, payload);
    const { data } = await apiClient.put(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const deleteClubCarouselImage = async (clubId: string, payload: any) => {
  try {
    const url = `club/${clubId}/carousel-image`;

    console.log(url, payload);
    const { data } = await apiClient.put(url, payload);
    return data.data;
  } catch (error: any) {
    throw new Error(catchError(error));
  }
};

const ClubService = {
  getAllClubs,
  getClubById,
  getClubTickets,
  getClubTables,
  getMyClub,
  getClubCarouselImages,
  updateClubInfo,
  createClubTicket,
  updateClubTicket,
  deleteClubTicket,
  uploadClubLogo,
  uploadClubCarouselImage,
  deleteClubCarouselImage,
};

export default ClubService;
