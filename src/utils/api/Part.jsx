import { apiClient } from "./ApiConfig";
import { getToken } from "../../storage/Token";

export async function getParts() {
    const path = "/part";
    return apiClient.get(path, {
        params: {
            expand: "chapters",
            sort: "num"
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
            expand: "chapters",
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function patchPart(id, data) {
    const path = "/part/" + id;
    return apiClient.patch(path, data);
}

export async function postPart(data) {
    const path = "/part";
    return apiClient.post(path, data);
}

export async function deletePartMethod(id) {
    const path = "/part/" + id;
    return apiClient.delete(path);
}
