export type PrItem = {
    key: string,
    header: string,
    headerMedia: string,
    content: string
}

type unsubscribeFunction = () => void; // void != {} !

export interface IPrItemService {
    subscribe: (subscriber: () => void) => unsubscribeFunction; // TODO
    getItems: () => Array<PrItem>;
    getItemByKey: (key: string) => PrItem | undefined;
    addItem: (elem: PrItem) => void;
    removeItem: (key: string) => void;
    removeLastItem: () => void;
}

