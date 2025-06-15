import { generateNanoId } from '../utils/helper.js'
import { getUrl, saveShortUrl } from '../dao/short_url.js';
import { getCustomShortUrl } from '../dao/user.dao.js';

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl =  generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
}

export const createShortUrlWithUser = async (url, userId, customUrl = null) => {
    const shortUrl =  customUrl || generateNanoId(7);
    const exist = await getCustomShortUrl(customUrl);
    if (exist) throw new Error("This custom Url already exist")

        //--- In this line if they different custoUrl then comes anyways error
    await saveShortUrl(shortUrl, url, userId); 
    return shortUrl;
}

export const getShortUrl = async (id) => {
    const url = await getUrl(id);
    if (url) {
        return url;
    } else {
        return 'Not Found';
    }
}