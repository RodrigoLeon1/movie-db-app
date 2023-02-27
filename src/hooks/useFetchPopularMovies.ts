import { useQuery } from 'react-query';
import movieAdapter from '../adapters/movie.adapter';
import { getPopularMovies } from '../services/movies.service';

const useFetchPopularMovies = () => {
  const queryKey = 'POPULAR_MOVIES';

  const { data, isLoading, isError, error } = useQuery(queryKey, () => {
    return getPopularMovies();
  });

  return {
    movies: data?.results.map((apiMovie) => movieAdapter(apiMovie)),
    isLoading,
    isError,
  };
};

export default useFetchPopularMovies;
