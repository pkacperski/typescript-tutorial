export type PrItem = {
    key: string,
    header: string,
    headerMedia: string,
    content: string
}

export interface IPrItemService {
    getItems: () => Array<PrItem>; // Read (R)
    getItemByKey: (key: string) => PrItem | undefined;
    addItem: (elem: PrItem) => void; // Add (C)
    removeItem: (key: string) => void; // Delete (D) // TODO: extract to different interface, and this interface extends the other interface (common implemenation of other interface)
    // TODO: update
    // TODO: cos z obsluga przycisku typu wcisniecie przycisku powoduje usuniecie itemu i rerender listy?
}

