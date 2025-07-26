import { askGemini } from '../services/gemini.service.js';
import { createShortUrlWithoutUser, createShortUrlWithUser, getShortUrl } from '../services/short_url.service.js'
import { urlContent } from '../services/urlContent.service.js';
import wrapAsync from '../utils/tryCatch.js';

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body;

    let content;
    let aiInput;

    try {
        content = await urlContent(data.url);
        if (content && content.title && content.description) {
            aiInput = `${content.title}\n${content.description}`;
        } else {
            throw new Error("No content extracted");
        }
    } catch (err) {
        // console.warn("Failed to fetch HTML content, falling back to URL-only input.");
        aiInput = `This URL seems related to a website. Based on the link "${data.url}", generate a 1-line summary of what this site is likely about and give 3 related hashtags.`;
    }

    const aiResponce = await askGemini(aiInput);


    let shortUrl;
    if (req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.customUrl);
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url);
    }
    res.status(200).json({
        shortUrl,
        summary: aiResponce.summary,
        tags: aiResponce.tags
    });
})

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id);
    res.redirect(url.long_url);
})
