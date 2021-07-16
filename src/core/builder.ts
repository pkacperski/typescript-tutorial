import { IPrItemService } from './pr-item-interface';
import { PrItemService } from './pr-list-items';

export const createService: () => IPrItemService = () => {
    return new PrItemService(); // or PrItemServiceFromFile() -> only 1 place to replace if therre is a need for to change! or even read that from settings file
    // TODO: 
}