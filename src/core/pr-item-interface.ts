export type PrItem = {
    key: string,
    header: string,
    headerMedia: string,
    content: string
}

type unsubscribeFunction = () => void; // void != {} !

export interface IPrItemService {
    subscribe: (subscriber: () => void) => unsubscribeFunction; // TODO
    getItems: () => Array<PrItem>; // Read (R)
    getItemByKey: (key: string) => PrItem | undefined;
    addItem: (elem: PrItem) => void; // Add (C)
    removeItem: (key: string) => void; // Delete (D) // TODO: extract to different interface, and this interface extends the other interface (common implemenation of other interface)
    removeLastItem: () => void;
    // TODO: update
    // TODO: cos z obsluga przycisku typu wcisniecie przycisku powoduje usuniecie itemu i rerender listy?
}

