import { FC } from 'react';

interface Props {
  label: string;
  handleOnClick: () => void;
}

const Button: FC<Props> = ({ label, handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      className="bg-[#8b5df6] hover:bg-[#694bad] py-2 px-6 rounded-xl text-white font-semibold text-base tracking-[0.2px]"
    >
      {label}
    </button>
  );
};

export default Button;
