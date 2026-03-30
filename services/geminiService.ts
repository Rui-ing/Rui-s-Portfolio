
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_BIO, PROJECTS, SKILLS } from "../constants";

const getSystemInstruction = () => `
You are the AI Assistant for this portfolio website. You represent the developer, a creative technologist.
Your tone is professional, futuristic, helpful, and slightly witty.

BIO: ${PORTFOLIO_BIO}

PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n')}

SKILLS:
${SKILLS.map(s => `- ${s.name} (Level: ${s.level}/100)`).join('\n')}

INSTRUCTIONS:
- Answer questions about the developer's background, skills, and projects.
- Keep responses concise (under 3 sentences).
- If asked about something not in the context, politely suggest contacting the developer directly.
- Use a tech-forward vocabulary.
`;

export async function chatWithGemini(userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const contents = [
    ...history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model' as any,
      parts: [{ text: m.content }]
    })),
    { role: 'user', parts: [{ text: userMessage }] }
  ];

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm having trouble connecting to my neural network right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The uplink is unstable. Please try again in a moment.";
  }
}
