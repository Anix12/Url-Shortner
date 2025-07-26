import AxiosInstance from "../utils/AxiosInstance.js";
import { retryRequest } from "../utils/retryRequest";

export const createShortUrl = async (url, customUrl) => {
    return retryRequest(
        () => AxiosInstance.post("/api/create", customUrl ? { url, customUrl } : { url }),
        3, // retries
        2000 // delay in ms
    ).then(res => res.data);
}