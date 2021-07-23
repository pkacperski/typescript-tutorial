import { FC, useCallback } from 'react';
import { PrItemService } from '../core/pr-list-items';
import { PrItemServiceFromFile } from '../core/pr-list-items-from-file';
import service from './PrList';

interface Props {
  onClick: () => void;
}

export const FunctionalButton: FC<Props> = ({ onClick }) => {
  // return <button onClick={onClick}>Test Button</button>;
  return <button onClick={onClick} />;
};
