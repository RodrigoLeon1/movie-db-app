import { FC } from 'react';

interface Props {
  value: number;
}

const Average: FC<Props> = ({ value }) => {
  return (
    <span
      className="h-fit py-2 px-4 rounded text-[#514cff] font-bold"
      style={{ backgroundColor: 'rgba(81, 76, 255, 0.15)' }}
    >
      {value}
    </span>
  );
};

export default Average;
