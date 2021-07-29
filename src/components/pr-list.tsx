import { List } from '@fluentui/react-northstar';
import { useEffect, useState } from 'react';
import { useAppContext } from '../core/app-context';
import { PrItem } from '../core/pr-item-interface';

const PrList = () => {
  const [selectedIndex] = useState(1);
  const [prItems, setPrItems] = useState<Array<PrItem>>();
  const { prItemService } = useAppContext();

  useEffect(() => {
    const getItemsAsync = async () => {
      const items = await prItemService.getItems();
      if(items) {
        setPrItems(items);
      }
    }
    getItemsAsync();
    const unsubscribe = prItemService.subscribe(getItemsAsync); // TODO

    return unsubscribe;
  }, [setPrItems, prItemService]);

  return (
    <>
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {}}
        items={prItems}
        // items={Array<PrItem>()}
      />
    </>
  );
}

export default PrList;
