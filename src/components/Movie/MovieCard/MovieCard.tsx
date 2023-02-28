import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl, IMG_PLACEHOLDER } from '../../../utils/image.utils';
import { ROUTES } from '../../../utils/router.utils';
import { Movie } from '../../../models/Movie';
import Average from '../../Average/Average';

interface Props {
  movie: Movie;
}

const MovieCard: FC<Props> = ({ movie }) => {
  const movieDetailUrl = `${ROUTES.DETAIL}/${movie.id}`;
  const moviePathImg = movie?.posterImg ? getImageUrl(movie.posterImg) : IMG_PLACEHOLDER;

  return (
    <article className="mx-auto">
      <div>
        <Link to={movieDetailUrl}>
          <img className="rounded-2xl mb-4 h-full" src={moviePathImg} />
        </Link>
      </div>

      <div className="flex justify-between gap-2">
        <Link to={movieDetailUrl}>
          <h3 className="text-xl font-semibold text-white">{movie?.title}</h3>
        </Link>

        {movie?.voteAverage ? <Average value={movie?.voteAverage} /> : null}
      </div>
    </article>
  );
};

export default MovieCard;
