import MovieCardGrid from '../components/Movie/MovieCard/MovieCardGrid';
import MovieHighlightedGrid from '../components/Movie/MovieHighlighted/MovieHighlightedGrid';
import useFetchPopularMovies from '../hooks/useFetchPopularMovies';
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies';
import { ROUTES } from '../utils/router.utils';

const Home = () => {
  const { movies = [], isLoading, isError } = useFetchUpcomingMovies();
  const { movies: popularMovies = [] } = useFetchPopularMovies();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error here</>;
  }

  return (
    <>
      <MovieCardGrid title="Upcoming movies" movies={movies} limit={4} buttonUrl={ROUTES.UPCOMING} />

      <MovieHighlightedGrid
        movies={popularMovies}
        title="Most Popular Movies of All Time"
        description={`The "Most Popular Movies of All Time" section features a carefully curated selection of the most beloved and iconic films from throughout cinema history. From timeless classics to modern masterpieces, these movies have captured the hearts and imaginations of audiences around the world, and continue to stand the test of time as true cinematic treasures. Whether you're a film buff or a casual viewer, this collection is sure to have something for everyone, and is a must-see for anyone looking to explore the very best that the world of movies has to offer.`}
      />
    </>
  );
};

export default Home;
