import { FC, useCallback } from 'react';
import { useAppContext } from '../core/app-context';
import { Button } from './functional-button';

export const GetAllButton: FC = () => {
  const {prItemService} = useAppContext();

  const myFunction = useCallback(
    () => {
      prItemService.getItems();
    },
    [prItemService],
  );

  return <Button onClick={myFunction}>Get All</Button>;
};
