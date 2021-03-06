import { PrItem, IPrItemService } from './pr-item-interface';

export class PrItemService implements IPrItemService {
    getItems: () => Array<PrItem> = () => {
      return this.items;
    }

    getItemByKey: (key: string) => PrItem | undefined = (key: string) => {
      return this.items.find(item => item.key === key);
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
      if(idx !== -1) {
        this.items.splice(idx, 1);
      }
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

