import { apiClient } from "./ApiConfig";
import { getToken } from "../../storage/Token";

export async function getParts() {
    const path = "/part";
    return apiClient.get(path, {
        params: {
            expand: "chapters"
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function getPart(id) {
    const path = "/part/" + id;
    return apiClient.get(path, {
        params: {
            expand: "chapters"
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
}
