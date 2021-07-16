import { PrItem, IPrItemService } from './pr-item-interface';

export class PrItemService implements IPrItemService {
    getItems: () => Array<PrItem> = () => {
        return this.items;
    }
    
    addItem: (elem: PrItem) => void = (elem: PrItem) => {
        this.items.push(elem);
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

