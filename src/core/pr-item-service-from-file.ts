import { IPrItemService, PrItem } from "./pr-item-interface";

export class PrItemServiceFromFile implements IPrItemService {
    public constructor(
      private items: Array<PrItem>,
      private subscribers: Array<() => void>
    ) {};
    
    static async init(): Promise<IPrItemService> {
      const data = (await import(`../data/pr-items.json`)).default;
      const items = Object.values(data);
      const subscribers = Array<() => void>();
  
      return new PrItemServiceFromFile(items, subscribers);
    }

    subscribe(subscriber: () => void) {
      this.subscribers.push(subscriber);
      console.log("subscribe!");
      return () => {
        this.subscribers.pop(); // TODO - remove the correct subscriber from the array (find the correct subscriber and remove it)
        console.log("unsubscribe!")
      };
    }

    getItems(): Array<PrItem> {
      return this.items;
    }
    
    getItemByKey: (key: string) => PrItem | undefined = (key: string) => {
      return this.items.find(item => item.key === key); // problem with returning either PrItem or undefined if key not found
    }

    addItem: (elem: PrItem) => void = (elem: PrItem) => {
      this.items.push(elem);
      // maybe save to file
      this.notifyAllSubscribers();
    }

    removeLastItem: () => void = () => {
      this.items.splice(this.items.length-1, 1);
      // maybe save to file
      this.notifyAllSubscribers();
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
      // maybe save to file
      this.notifyAllSubscribers();
    }

    notifyAllSubscribers() {
      this.subscribers.forEach(func => func());
      console.log("subscriber notified!");
    }
}
