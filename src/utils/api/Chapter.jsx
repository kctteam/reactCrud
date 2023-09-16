import { apiClient } from "./ApiConfig";
import { getToken } from "../../storage/Token";

export async function getChapter(id) {
    const path = "/chapter/" + id;
    return apiClient.get(path, {
        params: {
            expand: "part,text"
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function patchChapter(id, data) {
    const path = "/chapter/" + id;
    return apiClient.patch(path, data);
}
