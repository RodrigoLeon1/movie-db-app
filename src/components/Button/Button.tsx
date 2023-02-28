import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  url: string;
  variant?: 'small' | 'normal';
}

const Button: FC<Props> = ({ label, url, variant = 'normal' }) => {
  return (
    <Link
      to={url}
      className={`inline-block bg-[#8b5df6] hover:bg-[#694bad] 
                  rounded-xl text-white font-semibold tracking-[0.2px] 
                  ${variant === 'small' ? 'text-xs py-1 px-4' : 'text-base py-2 px-6'}`}
    >
      {label}
    </Link>
  );
};

export default Button;
