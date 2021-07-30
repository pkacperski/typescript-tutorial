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
    const getPrItems = () => {
      let items = prItemService.getItems();

      if(items) {
        setPrItems(items); // TODO: error
      }

      // force rerender - works
      setState({});

      // let prItems = prItemService.getItems();
      // setPrItems(items => items = prItemService.getItems());
    }
    getPrItems();
    
    return prItemService.subscribe(getPrItems);
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
