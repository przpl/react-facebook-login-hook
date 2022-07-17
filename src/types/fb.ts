import { LoginResponse, LogOutResponse } from "./loginStatusResponse";
import { InitParams, LoginOptions } from "./options";

/**
 * @see https://developers.facebook.com/docs/javascript/reference/v14.0
 */
export interface FB {
    init: (params: InitParams) => void;

    login: (callback: (res: LoginResponse) => void, options?: LoginOptions) => void;

    logout: (callback: (res: LogOutResponse) => void) => void;

    api: (path: string, params: { fields: string }, callback: (res: unknown) => void) => void;
}
