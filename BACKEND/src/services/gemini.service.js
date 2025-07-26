import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyAvGMcRvD_D9fybyMuCnb4X5WNXCT7KQdk",
});

export const askGemini = async (content) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash",
            contents: `Summarize this content in 1 line and give 3 relevant hashtags:\n\n${content}`,
        });

        // Extract the text from the correct property in the response
        const fullText = response.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // Split summary and extract hashtags from the entire text
        const lines = fullText.split('\n').filter(line => line.trim() !== '');
        const summary = lines[0] || "";
        // Collect all hashtags from the entire response
        const tags = fullText.match(/#[\w]+/g) || [];

        return { summary, tags };
    } catch (error) {
        console.error('Gemini API error:', error.message);
        return { summary: "AI could not generate a summary.", tags: [] };
    }
}