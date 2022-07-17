export interface Options extends AppIdParams, ScopeParams {
    /** @default 'name,email,picture'  */
    fields?: string;

    /**
     *  @default 'en_US'
     *  @see https://developers.facebook.com/docs/javascript/internationalization
     */
    language?: string;
    useRedirect?: boolean;
    onInitError?: (error: unknown) => void;
    sdkInitParams?: Omit<InitParams, "appId">;
    loginOptions?: Omit<LoginOptions, "scope">;
    dialogParams?: Omit<DialogParams, "client_id" | "scope">;
}

export interface AppIdParams {
    /** Your application ID. If you don't have one find it in the https://developers.facebook.com/apps */
    appId: string;
}

export interface ScopeParams {
    /**
     * @default 'public_profile,email'
     * @see https://developers.facebook.com/docs/permissions/reference
     */
    scope?: string;
}

/** @see https://developers.facebook.com/docs/javascript/reference/FB.init/v14.0 */
export interface InitParams extends AppIdParams {
    /** Determines which versions of the Graph API and any API dialogs or plugins are invoked when using the .api() and .ui() functions.
     * @see https://developers.facebook.com/docs/graph-api/changelog
     * @default 'v14.0'
     */
    version?: "v7.0" | "v8.0" | "v9.0" | "v10.0" | "v11.0" | "v12.0" | "v13.0" | "v14.0";

    /** Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code.
     * @default false
     */
    cookie?: boolean;

    /** Determines whether a long-lived access token for the session can be saved in localStorage. This enables maintaining a user's logged in status when 3rd party cookies are blocked from being sent to Facebook domains.
     * @default true
     */
    localStorage?: boolean;

    /** Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not.
     * @default false
     */
    xfbml?: boolean;

    /** Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. This parameter determines whether they are enabled.
     * @default false
     */
    frictionlessRequests?: boolean;
}

export interface DialogParams extends ScopeParams {
    /** Your application ID. If you don't have one find it in the https://developers.facebook.com/apps
     *
     * Same as 'appId'
     */
    client_id: string;

    /** The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog. If you are using this in a webview within a desktop app, this must be set to https://www.facebook.com/connect/login_success.html. You can confirm that this URL is set for your app in the App Dashboard. Under Products in the App Dashboard's left side navigation menu, click Facebook Login, then click Settings. Verify the Valid OAuth redirect URIs in the Client OAuth Settings section. */
    redirect_uri?: string;

    /** A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI.
     * @default 'fb-login-state' */
    state?: string;

    /** Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments. See the Confirming Identity section to choose which type your app should use. This can be one of:
     *
     * 'code', 'token', 'code%20token', 'grated_scopes'
     * @default 'code' */
    response_type?: string;
}

/** @see https://developers.facebook.com/docs/reference/javascript/FB.login/v14.0 */
export interface LoginOptions extends ScopeParams {
    /** Supports 3 values: rerequest, reauthenticate, reauthorize.
     *
     * Use 'rerequest' when re-requesting a declined permission. */
    auth_type?: "rerequest" | "reauthenticate" | "reauthorize";

    /** When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the authResponse */
    return_scopes?: boolean;

    /** When true, prompt the user to grant permission for one or more Pages */
    enable_profile_selector?: boolean;

    /** Comma separated list of IDs to display in the profile selector */
    profile_selector_ids?: string;
}
