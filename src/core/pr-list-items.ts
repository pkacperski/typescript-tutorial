import { PrItem, IPrItemService } from './pr-item-interface';

export class PrItemService implements IPrItemService {
    getItems: () => Array<PrItem> = () => {
      return this.items;
    }

    getItemByKey: (key: string) => PrItem = (key: string) => {
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].key === key)
          return this.items[i];
      }
      return (
        {
          "key": "cecil",
          "header": "Cecil Folk",
          "headerMedia": "5:22:40 PM",
          "content": "The GB pixel is down, navigate the virtual interface!"
        }
      ); // TODO: return value when given key not found
      // return this.items.find(item => item.key === id); // problem with returning either PrItem or undefined if key not found
    }
    
    addItem: (elem: PrItem) => void = (elem: PrItem) => {
      this.items.push(elem);
    }

    removeItem: (key: string) => void = (key: string) => {
      let idx = -1;
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].key === key)
          idx = i;
      }
      this.items.splice(idx, 1);
    }

    private items: Array<PrItem> = [
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
}

