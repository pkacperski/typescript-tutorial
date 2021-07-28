import { IPrItemService } from "../core/pr-item-interface"
// import { PrItemService } from "../core/pr-item-service"
import { PrItemServiceFromFile } from "../core/pr-item-service-from-file";

export type IAppServices = {
    prItemService: IPrItemService;
    // ...
}

// export function buildServices(): IAppServices { // hardcoded
//    const prItemService = new PrItemService();

//    return {
//     prItemService
//    };
// }

export async function buildServices(): Promise<IAppServices> { // from file
    const prItemService = await PrItemServiceFromFile.init();

    return {
        prItemService
    };
}

// z builder.ts:
// export const createService: () => IPrItemService = () => {
//     return new PrItemService();
// }

// export const createService: () => Promise<IPrItemService> = async () => {
//     return await PrItemServiceFromFile.init();
// }
