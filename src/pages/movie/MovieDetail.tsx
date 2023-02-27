import { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieDetail from '../../hooks/useFetchMovieDetail';
import Favorite from '../../components/Favorite/Favorite';
import { getImageUrl } from '../../utils/image.utils';

interface Props {}

const MovieDetail: FC<Props> = ({}) => {
  let { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetail(Number(movieId));

  if (isLoading || !movie) {
    return <>loading here...</>;
  }

  // console.log({ movie });

  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-2">
        <div>
          <img className="rounded-2xl shadow-xl h-full" src={getImageUrl(movie.posterImg)} />
        </div>

        <div>
          <div className="flex items-center gap-5 mb-10">
            <h1 className="text-3xl font-bold text-white pb-1">{movie.title}</h1>
            <Favorite currentMovie={movie} />
          </div>

          <p className="text-gray-400">{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
