import { FC } from 'react';
import { useAppContext } from '../core/app-context';
import { FunctionalButton } from './functional-button';

export const GetAllButton: FC = () => {
  const {prItemService} = useAppContext();
  return <FunctionalButton onClick={prItemService.getItems} buttonName="Get All"></FunctionalButton>;
};
