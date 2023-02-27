import { FC } from 'react';
import { Movie } from '../../models/Movie';
import Heart from '../../assets/svg/Heart';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/states/favorites';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

interface Props {
  currentMovie: Movie;
}

const Favorite: FC<Props> = ({ currentMovie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((store: AppStore) => store.favorites);

  // const test = [...favorites];

  // const isMovieAlreadyAdded = favorites?.find((m) => m.id === currentMovie.id);

  console.log(favorites);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(currentMovie));
  };

  return (
    <div onClick={handleToggleFavorite}>
      <Heart className="h-5 fill-[#243c5a] cursor-pointer" />
    </div>
  );
};

export default Favorite;
