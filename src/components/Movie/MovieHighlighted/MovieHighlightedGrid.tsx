import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Button from '../../Button/Button';
import { ROUTES } from '../../../utils/router.utils';
import { Movie } from '../../../models/Movie';
import MovieHighlighted from './MovieHighlighted';

import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  title: string;
  description: string;
  movies: Movie[];
  limit?: number;
}

const MovieHighlightedGrid: FC<Props> = ({ title, description, movies, limit = 5 }) => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white pb-5">{title}</h2>
          <p className="text-gray-400 mb-5">{description}</p>
          <Button label="View more" url={ROUTES.POPULAR} />
        </div>

        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {movies.slice(0, limit).map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieHighlighted movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieHighlightedGrid;
