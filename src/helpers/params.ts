export function encodeObjectToUlrParams(obj: any): string {
    if (!obj || typeof obj !== "object" || Object.keys(obj).length === 0) {
        return "";
    }

    return (
        "?" +
        Object.keys(obj)
            .map((key) => `${key}=${encodeURIComponent(obj[key])}`)
            .join("&")
    );
}

export function decodeUlrParamsToObject(params: string) {
    return (
        params
            ?.replace(/^\?/, "")
            .split("&")
            .reduce((acc, chunk) => {
                if (!chunk) {
                    return acc;
                }

                const [key, value] = chunk.split("=");
                return { ...acc, [key]: decodeURIComponent(value) };
            }, {}) || {}
    );
}
