import React, { FC, useState } from "react";

import { useFacebookLogin } from "../src/useFacebookLogin";

const Example: FC<{ appId: string }> = ({ appId }) => {
    const { busy, logIn, logOut, getProfile } = useFacebookLogin({
        appId,
        onInitError: (error) => console.log("initialization error", error),
    });
    const [userId, setUserId] = useState<string | null>(null);

    async function handleLogin() {
        const response = await logIn();
        if (response?.status === "connected") {
            setUserId(response.authResponse.userID);
            const profile = await getProfile();
            console.log("profile", profile);
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>User id: {userId ?? "null"}</div>
            <div>
                <button disabled={busy} onClick={handleLogin}>
                    {busy ? "Please wait..." : "Log in with Facebook"}
                </button>
            </div>
            <div>
                <button disabled={busy || !userId} onClick={logOut}>
                    Log out
                </button>
            </div>
            <div>
                <button onClick={() => setUserId(null)}>Clear user id</button>
            </div>
        </div>
    );
};

export const ExampleWrapper: FC<{ appId: string }> = ({ appId }) => {
    if (!appId) {
        return <h1>Provide your App ID</h1>;
    }

    return <Example appId={appId} />;
};
