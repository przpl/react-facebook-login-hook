// Server-Side Rendering

export function isClientSide() {
    return typeof window !== "undefined";
}
