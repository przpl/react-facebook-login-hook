import { useEffect, useState } from "react";

import { DIALOG_PARAMS_STATE, getFB, isRedirected, redirectToDialog } from "./helpers/fbClient";
import { isClientSide } from "./helpers/ssr";
import { loadSdk } from "./sdk/loadSdk";
import { LogOutResponse, LoginResponse } from "./types/loginStatusResponse";
import type { DialogParams, LoginOptions, Options } from "./types/options";

export function useFacebookLogin(options: Options) {
    const [ready, setReady] = useState(false);
    const [busy, setBusy] = useState(false);

    const dialogParams: DialogParams = {
        redirect_uri: isClientSide() ? location.origin + location.pathname : "/",
        state: DIALOG_PARAMS_STATE,
        response_type: "code",
        ...options.dialogParams,
        client_id: options.appId,
    };
    const loginOptions: LoginOptions = {
        ...options.loginOptions,
        scope: options.scope ?? "public_profile,email",
    };

    useEffect(() => {
        async function init() {
            const version = options.sdkInitParams?.version ?? "v16.0";

            try {
                await loadSdk(options.language || "en_US", version, options.appId);
            } catch (error) {
                options.onInitError?.(error);
                return;
            }

            setReady(true);

            window.fbAsyncInit = () => {
                getFB().init({
                    version,
                    ...options.sdkInitParams,
                    appId: options.appId,
                });

                if (isRedirected(dialogParams) && options.useRedirect) {
                    requestLogin();
                }
            };
        }

        init();
    }, []);

    async function logIn() {
        if (!options.appId) {
            throw new Error("App ID is required.");
        }

        if (options.useRedirect) {
            redirectToDialog(dialogParams, loginOptions);
            return null;
        }

        return requestLogin();
    }

    function requestLogin() {
        setBusy(true);

        return new Promise<LoginResponse>((resolve, reject) => {
            try {
                getFB().login((res) => {
                    setBusy(false);
                    resolve(res);
                }, loginOptions);
            } catch (error) {
                reject(error);
                setBusy(false);
            }
        });
    }

    function logOut() {
        return new Promise<LogOutResponse>((resolve, reject) => {
            try {
                getFB().logout((response) => resolve(response));
            } catch (error) {
                reject(error);
            }
        });
    }

    function getProfile() {
        return new Promise((resolve, reject) => {
            try {
                getFB().api("me", { fields: options.fields ?? "name,email,picture" }, (res) => resolve(res));
            } catch (error) {
                reject(error);
            }
        });
    }

    return { ready, busy, logIn, logOut, getProfile };
}
