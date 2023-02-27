import { useQuery } from 'react-query';
import movieAdapter from '../adapters/movie.adapter';
import { getMovieDetails } from '../services/movies.service';

const useFetchMovieDetail = (movieId: number) => {
  const queryKey = `MOVIE_DETAIL_${movieId}`;

  const { data, isLoading, isError, error } = useQuery(queryKey, () => {
    return getMovieDetails(movieId);
  });

  return {
    movie: data ? movieAdapter(data) : null,
    isLoading,
    isError,
  };
};

export default useFetchMovieDetail;
