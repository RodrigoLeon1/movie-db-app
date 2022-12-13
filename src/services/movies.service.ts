import { axiosInstance } from '../utils/axios.utils';
import { PaginatedResult } from '../models/PaginatedResult';
import { ApiMovie } from '../models/api/ApiMovie';

const baseUrl = `/movie`;

export const getUpcomingMovies = async (): Promise<PaginatedResult<ApiMovie[]>> => {
  const url = `${baseUrl}/upcoming`;
  const res = await axiosInstance.get<PaginatedResult<ApiMovie[]>>(url);
  return res.data;
};

export const getPopularMovies = async (): Promise<PaginatedResult<ApiMovie[]>> => {
  const url = `${baseUrl}/popular`;
  const res = await axiosInstance.get<PaginatedResult<ApiMovie[]>>(url);
  return res.data;
};

export const getMovieDetails = async (movieId: number): Promise<ApiMovie> => {
  const url = `${baseUrl}/${movieId}`;
  const res = await axiosInstance.get<ApiMovie>(url);
  return res.data;
};

export const getMovieRecommendations = async (movieId: number): Promise<PaginatedResult<ApiMovie[]>> => {
  const url = `${baseUrl}/${movieId}/recommendations`;
  const res = await axiosInstance.get<PaginatedResult<ApiMovie[]>>(url);
  return res.data;
};
