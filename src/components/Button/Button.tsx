import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  url: string;
}

const Button: FC<Props> = ({ label, url }) => {
  return (
    <Link
      to={url}
      className="bg-[#8b5df6] hover:bg-[#694bad] py-2 px-6 rounded-xl text-white font-semibold text-base tracking-[0.2px]"
    >
      {label}
    </Link>
  );
};

export default Button;
