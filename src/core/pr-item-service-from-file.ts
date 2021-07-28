import { IPrItemService, PrItem } from "./pr-item-interface";

export class PrItemServiceFromFile implements IPrItemService {
    public constructor(
      private items: Array<PrItem>
    ) {};
    
    static async init(): Promise<IPrItemService> {
      const data = (await import(`../data/pr-items.json`)).default;
      const prs: Array<PrItem> = Object.values(data);
  
      return new PrItemServiceFromFile(prs);
    }

    subscribe(subscriber: () => void) {
      console.log("subscribe"); // TODO: subscriber pattern
      return () => {
        console.log("unsubscribe")
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
    }

    removeLastItem: () => void = () => {
      this.items.splice(this.items.length-1, 1);
      // maybe save to file
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
    }

    // TODO(1,5): implement CRUD operations -> getItemByKey(DONE), ?remove?
    // TODO(2): buttons for add and delete functionality, also for update, add UI for this -> 
}
