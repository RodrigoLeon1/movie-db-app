import MovieCardGrid from '../components/MovieCard/MovieCardGrid';
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies';
import { ROUTES } from '../utils/router.utils';

const Home = () => {
  const { movies = [], isLoading, isError } = useFetchUpcomingMovies();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error here</>;
  }

  return (
    <>
      <MovieCardGrid title="Upcoming movies" movies={movies} limit={4} buttonUrl={ROUTES.UPCOMING} />
    </>
  );
};

export default Home;
