import { FC } from 'react';
import { useAppContext } from '../core/app-context';
import { Button } from './functional-button';

export const DeleteLastButton: FC = () => {
  const {prItemService} = useAppContext();
  return <Button onClick={prItemService.removeLastItem.bind(prItemService)}>Delete last</Button>;
};
