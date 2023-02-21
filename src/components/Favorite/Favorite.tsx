import { FC } from 'react';
import Heart from '../../assets/svg/Heart';

interface Props {}

const Favorite: FC<Props> = ({}) => {
  const toggleFavorite = () => {
    // add to global state
  };

  return <Heart className="h-5 fill-[#243c5a] cursor-pointer" onClick={toggleFavorite} />;
};

export default Favorite;
