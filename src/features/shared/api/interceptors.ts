import { getAccessToken } from "./auth";

export function createHeaders(
    headers?: HeadersInit
): HeadersInit {

    const token = getAccessToken();

    return {
        "Content-Type": "application/json",
        ...(token && {
            Authorization: `Bearer ${token}`
        }),
        ...headers
    };
}