import { List } from '@fluentui/react-northstar';
import { useEffect, useState } from 'react';
import { useAppContext } from '../core/app-context';
import { PrItem } from '../core/pr-item-interface';

const PrList = () => {
  const [selectedIndex] = useState(1);
  const [prItems, setPrItems] = useState<Array<PrItem>>();
  const { prItemService } = useAppContext();
  let [ , setState] = useState({});

  useEffect(() => {
    const getItemsAsync = async () => {
      let items = await prItemService.getItems();

      if (items === prItems) {
        console.log('it will not render, the very same value is being set');
      }

      if(items) {
        setPrItems(items); // TODO: error
        console.log("setPrItems");
        console.log("length: " + items.length);
      }

      // force rerender - works
      setState({});
    }
    getItemsAsync();
    
    return prItemService.subscribe(getItemsAsync);
  }, [setPrItems, prItemService, prItems]);

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
