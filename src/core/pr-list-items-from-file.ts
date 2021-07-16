// TODO -> put in JSON file and read from JSON file

import { IPrItemService, PrItem } from "./pr-item-interface";

export class PrItemServiceFromFile implements IPrItemService {
    getItems: () => PrItem[] = () => {return [];};
    addItem: (elem: PrItem) => void = (elem: PrItem) => {};
    // TODO: how to read files in javascript? implement file access. steal implementation from PR hub -> look in PR Hub (JSONPrService in Pr Hub)
    // TODO(2): buttons for add and delete functionality, also for update, add UI for this
    // problem with Fluent UI -> ping Shift or Dmitrii
}

export const getItems: () => Array<PrItem> = () => {
    return items;
}

export const addItem: (elem: PrItem) => void = (elem: PrItem) => {
    items.push(elem);
}

const items: Array<PrItem> = [
    {
      key: 'robert',
      header: 'Robert Tolbert',
      headerMedia: '7:26:56 AM',
      content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
    },
    {
      key: 'celeste',
      header: 'Celeste Burton',
      headerMedia: '11:30:17 PM',
      content: 'Use the online FTP application to input the multi-byte application!',
    },
    {
      key: 'cecil',
      header: 'Cecil Folk',
      headerMedia: '5:22:40 PM',
      content: 'The GB pixel is down, navigate the virtual interface!',
    },
];

