export enum LoginStatus {
    /** The person is logged into Facebook, and has logged into your webpage. */
    Connected = "connected",
    /** The person is logged into Facebook, but has not logged into your webpage. */
    NotAuthorized = "not_authorized",
    /** The person is not logged into Facebook, so you don't know if they have logged into your webpage. Or FB.logout() was called before, and therefore, it cannot connect to Facebook. */
    Unknown = "unknown",
}

export interface AuthResponse {
    /** An access token for the person using the webpage. */
    accessToken: string;

    /** A UNIX time stamp when the token expires. Once the token expires, the person will need to login again. */
    expiresIn: string;

    /** The amount of time before the login expires, in seconds, and the person will need to login again. */
    reauthorize_required_in: string;

    /** A signed parameter that contains information about the person using your webpage. */
    signedRequest: string;

    /** The ID of the person using your webpage. */
    userID: string;
}

/** https://developers.facebook.com/docs/facebook-login/web */
export type LoginResponse =
    | {
          status: LoginStatus.Connected;
          authResponse: AuthResponse;
      }
    | {
          status: LoginStatus.NotAuthorized | LoginStatus.Unknown;
      };

export type LogOutResponse = {
    status: string;
};
