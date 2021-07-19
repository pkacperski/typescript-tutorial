import * as React from 'react';
import { List } from '@fluentui/react-northstar';
import { useState } from 'react';
import { createService } from './../core/builder';

// const PrList = () => { // PrItemService
//   const [selectedIndex] = useState(-1); // TODO: read documentation about hooks
//   const service = createService();

//   return (
//     <List
//       selectable
//       selectedIndex={selectedIndex}
//       onSelectedIndexChange={(e, newProps) => {
//       }}
//       items={service.getItems()}
//     />
//   );
// }

const PrList = async () => { // PrItemServiceFromFile
  const [selectedIndex] = useState(-1); // TODO: read documentation about hooks
  const service = createService();

  return (
      <List
        selectable
        selectedIndex={selectedIndex}
        onSelectedIndexChange={(e, newProps) => {
        }}
        items={(await service).getItems()}
      />
  );
}

export default PrList;
