import axios from 'axios';

// Api env vars
const baseURL = import.meta.env.VITE_MOVIEDB_BASE_URL;
const apiKey = import.meta.env.VITE_MOVIEDB_API_V4;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
