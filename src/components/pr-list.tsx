import * as React from 'react';
import { List } from '@fluentui/react-northstar';
import { useEffect, useState } from 'react';
import { createService } from './../core/builder';
import { PrItem } from '../core/pr-item-interface';

const PrList = () => {
  const [selectedIndex] = useState(-1);
  const [items, setItems] = useState<Array<PrItem>>([]);
  const service = createService();

  useEffect(() => {
    const fetchItems = async () => {
      const items = (await service).getItems();
      setItems(items);
    }

    fetchItems();
  });

  return (
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {
        }}
        items={items} // from file
        // items={service.getItems()} // hardcoded values
      />
  );
}

export default PrList;
