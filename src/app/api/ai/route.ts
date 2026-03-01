import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are a helpful nutrition assistant for the UAE Real Food initiative. Your role is to help families in the UAE and MENA region eat real, whole food and avoid ultra-processed products.

Guidelines:
- Give practical, actionable advice focused on real whole foods
- Consider budget constraints and time limitations families face
- Recommend foods common in UAE/MENA cuisine: dates, camel milk, local fish, legumes, olive oil, fresh vegetables, whole grains
- Be encouraging, not judgmental
- Keep responses concise (2-4 paragraphs max)
- If asked about something unrelated to food/nutrition/health, politely redirect to food topics`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Gemini API key not configured. Add GEMINI_API_KEY to your environment variables." },
      { status: 500 }
    );
  }

  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContentStream({
      contents: [
        { role: "user", parts: [{ text: SYSTEM_PROMPT + "\n\nUser question: " + prompt }] }
      ],
    });

    // Stream the response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to generate response";
    return Response.json({ error: message }, { status: 500 });
  }
}
