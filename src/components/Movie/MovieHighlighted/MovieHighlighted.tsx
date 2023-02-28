import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../../models/Movie';
import { getImageUrl } from '../../../utils/image.utils';
import { ROUTES } from '../../../utils/router.utils';
import { truncate } from '../../../utils/string.utils';
import Button from '../../Button/Button';

interface Props {
  movie: Movie;
}

const MovieHighlighted: FC<Props> = ({ movie }) => {
  const movieUrl = `${ROUTES.DETAIL}/${movie.id}`;

  return (
    <article className="rounded bg-slate-900 h-[450px] w-full">
      <Link to={movieUrl}>
        <img className="rounded-t" src={getImageUrl(movie.backdropImg)} alt={`${movie.title} backdrop image`} />
      </Link>

      <div className="px-4 h-100">
        <Link to={movieUrl}>
          <h3 className="text-white my-3">{movie.title}</h3>
        </Link>

        <p className="text-gray-400 text-xs mb-5">{truncate(movie.overview)}</p>
        <Button label="Details" url={movieUrl} variant="small" />
      </div>
    </article>
  );
};

export default MovieHighlighted;
