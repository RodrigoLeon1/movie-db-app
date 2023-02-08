import { FC } from 'react';
import { ApiMovie } from '../../models/api/ApiMovie';
import Card from './Card';

interface Props {
  title: string;
  movies: ApiMovie[];
  columns?: string;
  gap?: number;
}

const CardGrid: FC<Props> = ({ title, movies, columns = 'repeat(5, 1fr)', gap = 6 }) => {
  return (
    <>
      {title}

      {movies.map((movie) => (
        <Card movie={movie} />
      ))}
    </>
  );
};

export default CardGrid;
