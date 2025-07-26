import * as cheerio from 'cheerio';

export const extractTextFromHTML = (html) => {
    const $ = cheerio.load(html);

    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content') || '';
    return {
        title,
        description
    };
};