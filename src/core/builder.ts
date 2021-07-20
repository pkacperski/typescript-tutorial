import { IPrItemService } from './pr-item-interface';
// import { PrItemService } from './pr-list-items';
import { PrItemServiceFromFile } from './pr-list-items-from-file';

// export const createService: () => IPrItemService = () => {
//     return new PrItemService();
// }

export const createService: () => Promise<IPrItemService> = async () => {
    return await PrItemServiceFromFile.init();
}
