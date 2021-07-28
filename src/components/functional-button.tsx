import { FC } from 'react';

interface Props {
  onClick: () => void;
  buttonName: string;
}

export const FunctionalButton: FC<Props> = ({ onClick, buttonName }) => {
  return <button onClick={onClick}>{buttonName}</button>;
};
