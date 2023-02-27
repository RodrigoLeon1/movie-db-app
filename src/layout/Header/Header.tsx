import { FC } from 'react';
import Navbar from '../Navbar/Navbar';

interface Props {
  hideContent?: boolean;
}

const Header: FC<Props> = ({ hideContent = false }) => {
  return (
    <header>
      <Navbar />

      {!hideContent && (
        <div className="min-h-[90vh] lg:max-w-[50%] container mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-7xl text-white font-bold leading-[5.5rem] mb-10">
            Get <span className="text-violet-500">Ready</span> to Light Up the Screen!
          </h2>

          <p className="text-gray-400 text-2xl">
            Discover the latest movies, trailers, and insider info with our up-to-date movie database. Find your next
            film obsession with us today!
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
