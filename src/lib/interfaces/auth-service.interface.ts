import { IAuthApi } from "./auth.interface";

export interface IAuthService {
    getByValue(value: string): Promise<IAuthApi>;
}
