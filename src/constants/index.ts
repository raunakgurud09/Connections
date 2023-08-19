export const IS_PROD = process.env.NODE_ENV === 'production';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const PAGE_LIMIT = 12;

export const GOOGLE_CLIENT_ID = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 2mb

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const CACHE_REVALIDATION = 60; // 1 minute

export const CLUB_COMMISSION = 4 / 100;
export const CLUB_GST = 18 / 100;

export const GTAG_ID = 'G-SXVGSQRNG0';

export const APP_NAME = 'Fullcover';
export const APP_DESCRIPTION = 'BOOK YOUR TICKETS NOW';
