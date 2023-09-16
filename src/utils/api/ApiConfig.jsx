import axios from "axios";

const baseUrl = () => {
    //const host = window.location.host;
    const url = "https://kct.team/holyWeb/";
    return url;
};

export const apiClient = axios.create({
    baseURL: baseUrl(),
});
