import { FC, useCallback } from 'react';
import { useAppContext } from '../core/app-context';
import { Button } from './button';

export const ButtonsContainer: FC = () => {
    const {prItemService} = useAppContext();

    const handleGetAll = useCallback(
      () => {
        prItemService.getItems();
      },
      [prItemService],
    );

    const handleDeleteLast = useCallback(
        () => {
          prItemService.removeLastItem();
        },
        [prItemService],
      );
    
    return(
        <>
            <Button onClick={handleGetAll}>Get all</Button>
            <Button onClick={handleDeleteLast}>Delete last</Button>
            {/* ... */}
        </>
    );
}
