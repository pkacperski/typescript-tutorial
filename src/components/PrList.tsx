import * as React from 'react';
import { List } from '@fluentui/react-northstar';
import { useCallback, useEffect, useState } from 'react';
import { createService } from '../core/builder';
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
      let item = (await service).getItemByKey(key);
      if (!item) {
        item = {
          "key": "item-not-found",
          "header": "Item not found!",
          "headerMedia": "",
          "content": "Could not find item with given key!"
        };
      }
      let list = Array<PrItem>();
      list.push(item);
      setFoundItemList(list);
    }
    const removeItemByKey = async (key: string) => {
      (await service).removeItem(key);
    }

    //removeItemByKey("robert"); // SOLUTION: extract to different functional component! first understand context!
    // fetchItems();
    fetchItemByKey("robert");
  }, [service, setItems, setFoundItemList]);

  // const FunctionalButton = (buttonsFunction: string, key = "robert") => {
  //   // const onClickHandle = (await service).removeItem;
  //   let buttonCallback, buttonName;
  //   if(buttonsFunction === "remove") {
  //     buttonCallback = useCallback(async (key = "robert") => {
  //         (await service).removeItem(key);
  //     }, [service]);
  //     buttonName = "Remove";
  //   }

  //   return <button onClick={buttonCallback}>{buttonName}</button>;
  // }

  return (
    <>
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {}}
        // items={items}
        items={foundItemList} 
      />
    </>
  );
}

export default PrList;
