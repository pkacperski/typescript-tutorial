import { FC } from 'react';

interface Props {
  onClick: () => void;
}

// context-based naming!!
export const Button: FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
