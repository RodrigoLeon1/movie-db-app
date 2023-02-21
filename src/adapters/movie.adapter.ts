import { ApiMovie } from '../models/api/ApiMovie';
import { Movie } from '../models/Movie';

const movieAdapter = (apiMovie: ApiMovie): Movie => {
  return {
    id: apiMovie.id,
    overview: apiMovie.overview,
    title: apiMovie.title,
    runtime: apiMovie.runtime,
    voteAverage: apiMovie.vote_average,
    posterImg: apiMovie.poster_path,
    backdropImg: apiMovie.backdrop_path,
    releaseDate: apiMovie.release_date,
  };
};

export default movieAdapter;
