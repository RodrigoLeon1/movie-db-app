import { FC } from 'react';
import { Movie } from '../../models/Movie';
import { getImageUrl } from '../../utils/image.utils';
import Average from '../Average/Average';

interface Props {
  movie: Movie;
}

const MovieCard: FC<Props> = ({ movie }) => {
  const moviePathImg = movie?.posterImg ? getImageUrl(movie.posterImg) : 'PLACEHOLDER IMG';

  return (
    <article className="mx-auto">
      <div>
        <img className="rounded-2xl mb-4 h-full" src={moviePathImg} />
      </div>

      <div className="flex justify-between gap-2">
        <h3 className="text-xl font-semibold text-white">{movie?.title}</h3>
        {movie?.voteAverage ? <Average value={movie?.voteAverage} /> : null}
      </div>
    </article>
  );
};

export default MovieCard;
