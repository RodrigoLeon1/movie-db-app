import { FC } from 'react';
import MovieCardGrid from '../components/MovieCard/MovieCardGrid';
import useFetchPopularMovies from '../hooks/useFetchPopularMovies';

const PopularMovies: FC = () => {
  const { movies = [], isLoading, isError } = useFetchPopularMovies();

  return (
    <>
      <MovieCardGrid movies={movies} />
    </>
  );
};

export default PopularMovies;
