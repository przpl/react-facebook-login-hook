# react-facebook-login-hook

[![NPM version](https://img.shields.io/npm/v/react-facebook-login-hook)](https://www.npmjs.com/package/react-facebook-login-hook)
[![NPM downloads](https://img.shields.io/npm/dm/react-facebook-login-hook)](https://www.npmjs.com/package/react-facebook-login-hook)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/react-facebook-login-hook)](https://www.npmjs.com/package/react-facebook-login-hook)

## Description

react-facebook-login-hook provides a React hook for Facebook login.

-   TypeScript support
-   Lightweight - no external dependencies

## Quickstart:

```typescript jsx
const { busy, logIn, logOut, getProfile } = useFacebookLogin({ appId: "YOUR_APP_ID" });

async function handleLogin() {
    const response = await logIn();
    if (response?.status === "connected") {
        // response.authResponse.accessToken - process access token
        const profile = await getProfile();
        console.log("profile", profile);
    }
}

return (
    <button disabled={busy} onClick={handleLogin}>
        {busy ? "Please wait..." : "Log in with Facebook"}
    </button>
);
```

## API

| name       | type       | Description                                                                   |
| ---------- | ---------- | ----------------------------------------------------------------------------- |
| ready      | `boolean`  | Indicates if Facebook SDK script was loaded successfully                      |
| busy       | `boolean`  | Has a value of true when the hook waits for the login process to complete     |
| logIn      | `function` |                                                                               |
| logOut     | `function` | Log out Facebook user from your app                                           |
| getProfile | `function` | Get data from a Facebook user's profile. Can be called after successful login |

### useFacebookLogin options/parameters

| name          | type           | Required | Default value        | Description                                                       |
| ------------- | -------------- | -------- | -------------------- | ----------------------------------------------------------------- |
| appId         | `string`       | ✓        |                      | Your application ID                                               |
| scope         | `string`       |          | public_profile,email | Facebook permissions                                              |
| fields        | `string`       |          | name,email,picture   | Facebook fields to fetch                                          |
| language      | `string`       |          | en_US                | SDK language                                                      |
| useRedirect   | `boolean`      |          | `undefined`          | Use redirect flow                                                 |
| onInitError   | `function`     |          | `undefined`          | Callback on init error (loading script element with Facebook SDK) |
| sdkInitParams | `InitParams`   |          | `undefined`          | Parameters for the SDK initialization                             |
| loginOptions  | `LoginOptions` |          | `undefined`          | Parameters for the Facebook login flow                            |
| dialogParams  | `DialogParams` |          | `undefined`          | Parameters for the Facebook login dialog                          |

### InitParams ([Facebook Documentation about init params](https://developers.facebook.com/docs/javascript/reference/FB.init/v14.0))

| name                 | type      | Required | Default value | Description                                                                                             |
| -------------------- | --------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------- |
| version              | `string`  |          | v14.0         | SDK version                                                                                             |
| cookie               | `boolean` |          | `undefined`   | Determines whether a cookie is created for the session or not                                           |
| localStorage         | `boolean` |          | true          | Determines whether a long-lived access token for the session can be saved in localStorage               |
| xfbml                | `boolean` |          | `undefined`   | Determines whether XFBML tags used by social plugins are parsed                                         |
| frictionlessRequests | `boolean` |          | `undefined`   | Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. |

### LoginOptions ([Facebook Documentation about login options](https://developers.facebook.com/docs/reference/javascript/FB.login/v14.0))

| name                    | type      | Required | Default value | Description                                                                                                             |
| ----------------------- | --------- | -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| auth_type               | `string`  |          | `undefined`   | Supports 3 values: rerequest, reauthenticate, reauthorize                                                               |
| return_scopes           | `boolean` |          | `undefined`   | When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the authResponse |
| enable_profile_selector | `boolean` |          | `undefined`   | When true, prompt the user to grant permission for one or more Pages                                                    |
| profile_selector_ids    | `string`  |          | `undefined`   | Comma separated list of IDs to display in the profile selector                                                          |

### DialogParams ([Facebook Documentation about dialog params](https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/))

| name          | type     | Required | Default value | Description                                                                                                                                                     |
| ------------- | -------- | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redirect_uri  | `string` |          | `undefined`   | The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog                                       |
| state         | `string` |          | `undefined`   | A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery. |
| response_type | `string` |          | `undefined`   | Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments                                        |

## Other resources

-   [Facebook Documentation](https://developers.facebook.com/docs/facebook-login/web)
