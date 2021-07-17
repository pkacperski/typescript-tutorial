// TODO -> put in JSON file and read from JSON file

import { IPrItemService, PrItem } from "./pr-item-interface";

export class PrItemServiceFromFile implements IPrItemService {
    public constructor(
        private items: Array<PrItem>
    ) {};
    
    static async init(): Promise<IPrItemService> {
      const data = (await import(`./../data/pr-items.json`)).default;
      const prs: Array<PrItem> = Object.values(data);
  
      return new PrItemServiceFromFile(prs);
    }

    getItems(): Array<PrItem> {
      return this.items;
    }    

    addItem: (elem: PrItem) => void = (elem: PrItem) => {
        // TODO
        // this.saveElemFromFile();
    }

    // getItems: () => Array<PrItem> = () => { // podejscie 1 - wczytywanie danych z pliku przy kazdym getItems()
    //     this.readDataFromFile();
    //     return this.items;
    // }

    // static async readDataFromFile(): /* Promise<IPrItemService> */ Array<PrItem> {
    //     // TODO
    //     // ./../data/pr-items.json

    //     const data = (await import(`./../data/pr-items.json`)).default;
    //     const prs: Array<PrItem> = Object.values(data);

    //     // return new PrItemServiceFromFile();
    //     return prs;
    // }

    // TODO: how to read files in javascript? implement file access. steal implementation from PR hub -> look in PR Hub (JSONPrService in Pr Hub)
    // TODO(1,5): implement CRUD operations
    // TODO(2): buttons for add and delete functionality, also for update, add UI for this
    // problem with Fluent UI -> ping Shift or Dmitrii
}

// export class JsonPrService implements IPrService {
//     private constructor(
//       private logger: ILogger,
//       private prList: PullRequestEntity[]
//     ) {}
  
//     static async init(logger: ILogger): Promise<IPrService> {
//       const data = (await import(`data/prs.json`)).default;
//       const prs: PullRequestEntity[] = Object.values(data);
  
//       return new JsonPrService(logger, prs);
//     }
  
//     async get(id: number): Promise<PullRequestEntity | null> {
//       throw new Error('Method not implemented.');
//     }
  
//     async getAll(): Promise<PullRequestEntity[]> {
//       return this.prList;
//     }
  
//     async filter(
//       predicate: (
//         value: PullRequestEntity,
//         index: number,
//         array: PullRequestEntity[]
//       ) => unknown,
//       thisArg?: any
//     ): Promise<PullRequestEntity[]> {
//       return this.prList.filter(predicate, thisArg);
//     }
  
//     async create(entity: PullRequestEntity): Promise<PullRequestEntity | null> {
//       throw new Error('Method not implemented.');
//     }
  
//     async update(entity: PullRequestEntity): Promise<PullRequestEntity | null> {
//       throw new Error('Method not implemented.');
//     }
//   }
