import urlScheme from '../model/shorturlModel.js';
import { ConflictError } from '../utils/errorHandler.js';

export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try {
        const newUrl = new urlScheme({
            short_url: shortUrl,
            long_url: longUrl
        })
        if (userId) {
            newUrl.user = userId
        }
        await newUrl.save()
    } catch (err) {
        if (err.code == 11000) {
            throw new ConflictError("Short Url Already Exist");
        }
        throw new Error(err)
    }
}

export const getUrl = async (id) => {
    return await urlScheme.findOneAndUpdate({ short_url: id }, { $inc: { clicks: 1 } });
}