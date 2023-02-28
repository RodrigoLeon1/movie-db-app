import { FC } from 'react';
import { Movie } from '../../../models/Movie';
import Button from '../../Button/Button';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
  title?: string;
  limit?: number;
  buttonUrl?: string;
}

const MovieCardGrid: FC<Props> = ({ title = '', movies, limit = 20, buttonUrl = null }) => {
  return (
    <section className="container mx-auto pb-16">
      {title && <h2 className="text-center text-3xl font-bold text-white pb-14">{title}</h2>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 content-center mb-14">
        {movies.slice(0, limit).map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      {buttonUrl && (
        <div className="flex items-center justify-center">
          <Button label="View more" url={buttonUrl} />
        </div>
      )}
    </section>
  );
};

export default MovieCardGrid;
