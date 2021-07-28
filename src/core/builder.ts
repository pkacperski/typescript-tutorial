import { IPrItemService } from './pr-item-interface';
// import { PrItemService } from './pr-list-items';
import { PrItemServiceFromFile } from './pr-item-service-from-file';

// export const createService: () => IPrItemService = () => {
//     return new PrItemService();
// }

export const createService: () => Promise<IPrItemService> = async () => {
    return await PrItemServiceFromFile.init();
}

// TODO: zastapic tego buildera service-buildere'm!
