import MovieCardGrid from '../components/MovieCard/MovieCardGrid';
import useFetchUpcomingMovies from '../assets/hooks/useFetchUpcomingMovies';

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
      <MovieCardGrid title="Upcoming movies" movies={movies} />
    </>
  );
};

export default Home;
