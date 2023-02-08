import { FC } from 'react';

interface Props {
  label: string;
  handleOnClick: () => void;
}

const Button: FC<Props> = ({ label, handleOnClick }) => {
  return (
    <button
      onClick={handleOnClick}
      className="bg-[#4745D0] hover:bg-[#596e94] py-2 px-6 rounded-xl text-white font-semibold text-base tracking-[0.2px]"
    >
      {label}
    </button>
  );
};

export default Button;
