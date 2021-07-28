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
  }, [setPrItems, prItemService]);

  return (
    <>
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {}}
        items={prItems}
      />
    </>
  );
}

export default PrList;

// const PrList = () => {
//   const [selectedIndex] = useState(-1);
//   const [items, setItems] = useState<Array<PrItem>>([]);
//   const [foundItemList, setFoundItemList] = useState<Array<PrItem>>([]);
//   const service = createService(); // TODO: przeniesc tworzenie serwisu w inne (?) miejsce

//   useEffect(() => { // Browser hangs when running both fetchItem and fetchItemByKey hooks -> TODO: extract hooks to different functional components (using context)
//     const fetchItems = async () => {
//       const items = (await service).getItems();
//       setItems(items);
//     }
//     const fetchItemByKey = async (key: string) => {
//       let item = (await service).getItemByKey(key);
//       if (!item) {
//         item = {
//           "key": "item-not-found",
//           "header": "Item not found!",
//           "headerMedia": "",
//           "content": "Could not find item with given key!"
//         };
//       }
//       let list = Array<PrItem>();
//       list.push(item);
//       setFoundItemList(list);
//     }
//     const removeItemByKey = async (key: string) => {
//       (await service).removeItem(key);
//     }

//     // TODO: async functions - then() and catch()
//     removeItemByKey("robert"); // SOLUTION: extract to different functional component! first understand context!
//     fetchItems();
//     // fetchItemByKey("robert");
//   }, [service, setItems, setFoundItemList]);

//   return (
//     <>
//       <List
//         selectable
//         selectedIndex={selectedIndex}
//         onSelectedIndexChange={(e, newProps) => {}}
//         items={items}
//         // items={foundItemList} 
//       />
//     </>
//   );
// }

// export default PrList;

// const FunctionalButton = (buttonsFunction: string, key = "robert") => {
//   // const onClickHandle = (await service).removeItem;
//   let buttonCallback, buttonName;
//   if(buttonsFunction === "remove") { // BLAD (rules of hooks violation) - w druga strone: najpierw useCallback, a w nim if-y
//     buttonCallback = useCallback(async (key = "robert") => {
//         (await service).removeItem(key);
//     }, [service]);
//     buttonName = "Remove";
//   }

//   return <button onClick={buttonCallback}>{buttonName}</button>;
// }
