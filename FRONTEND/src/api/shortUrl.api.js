import AxiosInstance from "../utils/AxiosInstance.js";

export const createShortUrl = async (url, customUrl) => {
    const response = await AxiosInstance.post("api/create", customUrl ? { url, customUrl } : { url });
    return response.data.shortUrl;
}