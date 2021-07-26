import { FC, useCallback } from 'react';
import { PrItemService } from '../core/pr-list-items';
import { PrItemServiceFromFile } from '../core/pr-list-items-from-file';
import service from './pr-list';

interface Props {
  onClick: () => void;
  buttonName: string;
}

export const FunctionalButton: FC<Props> = ({ onClick, buttonName }) => {
  // return <button onClick={onClick}>Test Button</button>;
  return <button onClick={onClick}>{buttonName}</button>;
};
