import { createShortUrlWithoutUser, createShortUrlWithUser, getShortUrl } from '../services/short_url.service.js'
import wrapAsync from '../utils/tryCatch.js';

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body;
    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.customUrl);
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url);
    }
    res.status(200).json({ shortUrl: process.env.APP_URL_Frontend+"/" + shortUrl })
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id);
    res.redirect(url.long_url);
})
