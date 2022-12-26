import { FC } from 'react';
import { Grid, Text } from '@chakra-ui/react';
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
      <Text fontSize="4xl">{title}</Text>

      <Grid templateColumns={columns} gap={gap}>
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </Grid>
    </>
  );
};

export default CardGrid;
