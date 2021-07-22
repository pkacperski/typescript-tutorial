export type PrItem = {
    key: string,
    header: string,
    headerMedia: string,
    content: string
}

export interface IPrItemService {
    getItems: () => Array<PrItem>; // Read (R)
    getItemByKey: (id: string) => PrItem;
    addItem: (elem: PrItem) => void; // Add (C)
}

