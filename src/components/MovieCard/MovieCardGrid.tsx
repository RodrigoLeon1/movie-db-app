import { FC } from 'react';
import { Movie } from '../../models/Movie';
import Button from '../Button/Button';
import MovieCard from './MovieCard';

interface Props {
  title: string;
  movies: Movie[];
  columns?: string;
  gap?: number;
}

const MovieCardGrid: FC<Props> = ({ title, movies, columns = 'repeat(5, 1fr)', gap = 6 }) => {
  return (
    <section className="container mx-auto pb-16">
      <h2 className="text-center text-3xl font-bold text-white pb-14">{title}</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 content-center mb-14">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Button label="View more" handleOnClick={() => console.log('Navigate to list page')} />
      </div>
    </section>
  );
};

export default MovieCardGrid;
