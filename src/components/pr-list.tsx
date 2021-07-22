import * as React from 'react';
import { List } from '@fluentui/react-northstar';
import { useEffect, useState } from 'react';
import { createService } from './../core/builder';
import { PrItem } from '../core/pr-item-interface';

const PrList = () => {
  const [selectedIndex] = useState(-1);
  const [items, setItems] = useState<Array<PrItem>>([]);
  const [foundItemList, setFoundItemList] = useState<Array<PrItem>>([]);
  const service = createService();

  useEffect(() => { // Browser hangs when running both hooks (which contain async functions)!
    const fetchItems = async () => {
      const items = (await service).getItems();
      setItems(items);
    }
    const fetchItemByKey = async (key: string) => {
      const item = (await service).getItemByKey(key);
      let list = Array<PrItem>();
      list.push(item);
      setFoundItemList(list);
    }
    const removeItemByKey = async (key: string) => {
      (await service).removeItem(key); // DZIALA, ale czy ??czy nie powinienem najpierw pobrac wszystkich itemow??
    }

    removeItemByKey("robert");
    fetchItems();
    // fetchItemByKey("robert");
  }, [service, setItems, setFoundItemList]);

  return (
    <>
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {}}
        items={items} // items={foundItemList} 
      />
    </>
  );
}

export default PrList;
