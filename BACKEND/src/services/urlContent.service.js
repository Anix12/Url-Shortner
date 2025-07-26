import { getHTML } from '../utils/helper.js';
import { extractTextFromHTML } from '../utils/cheerioParser.js';

export const urlContent = async (url) => {
  let textContent;

  try {
    const html = await getHTML(url); // Try fetching full HTML
    textContent = await extractTextFromHTML(html); // Extract meaningful text
  } catch (error) {
   // console.warn("HTML fetch failed, using fallback:", error.message);

    textContent = `This is the link: ${url}\nPlease generate a summary based on your knowledge.`;
  }

  return textContent;
};