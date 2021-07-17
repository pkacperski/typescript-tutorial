import { IPrItemService } from './pr-item-interface';
import { PrItemService } from './pr-list-items';
import { PrItemServiceFromFile } from './pr-list-items-from-file';

export const createService: () => IPrItemService = () => {
    return new PrItemService(); // TODO: or PrItemServiceFromFile() -> only 1 place to replace if therre is a need for to change! or even read that from settings file
    // return new PrItemServiceFromFile();
    // return PrItemServiceFromFile.init();
}