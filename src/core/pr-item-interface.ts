export type PrItem = {
    key: string,
    header: string,
    headerMedia: string,
    content: string
}

export interface IPrItemService {
    getItems: () => Array<PrItem>; // Read (R)
    addItem: (elem: PrItem) => void; // Add (C)
    // TODO: rest of CRUD operations
}

