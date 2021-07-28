import { FC } from 'react';
import { useAppContext } from '../core/app-context';
import { FunctionalButton } from './functional-button';

export const DeleteLastButton: FC = () => {
  const {prItemService} = useAppContext();
  return <FunctionalButton onClick={prItemService.removeLastItem} buttonName="Delete last"></FunctionalButton>;
};
