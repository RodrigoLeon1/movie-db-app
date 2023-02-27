import { FC } from 'react';
import MovieCardGrid from '../components/MovieCard/MovieCardGrid';
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies';

const UpcomingMovies: FC = () => {
  const { movies = [], isLoading, isError } = useFetchUpcomingMovies();

  return (
    <>
      <MovieCardGrid movies={movies} />
    </>
  );
};

export default UpcomingMovies;
