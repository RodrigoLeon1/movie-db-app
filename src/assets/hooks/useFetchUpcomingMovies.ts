import { useQuery } from 'react-query';
import movieAdapter from '../../adapters/movie.adapter';
import { getUpcomingMovies } from '../../services/movies.service';

const useFetchUpcomingMovies = () => {
  const queryKey = 'UPCOMING_MOVIES';

  const { data, isLoading, isError, error } = useQuery(queryKey, () => {
    return getUpcomingMovies();
  });

  return {
    movies: data?.results.map((apiMovie) => movieAdapter(apiMovie)),
    isLoading,
    isError,
  };
};

export default useFetchUpcomingMovies;
