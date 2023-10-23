import { apiClient } from "./ApiConfig";
import { getToken } from "../../storage/Token";

export async function getChapter(id) {
    const path = "/chapter/" + id;
    return apiClient.get(path, {
        params: {
            expand: "part,text",
            sort: "num"
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

export async function postChapter(data) {
    const path = "/chapter";
    return apiClient.post(path, data);
}

export async function deleteChapterMethod(id) {
    const path = "/chapter/" + id;
    return apiClient.delete(path);
}
