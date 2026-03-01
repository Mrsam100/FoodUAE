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
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "OpenRouter API key not configured. Add OPENROUTER_API_KEY to your environment variables." },
      { status: 500 }
    );
  }

  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Prompt is required" }, { status: 400 });
    }

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      return Response.json({ error: `OpenRouter error: ${error}` }, { status: res.status });
    }

    // Stream SSE response back as plain text
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const reader = res.body?.getReader();

    if (!reader) {
      return Response.json({ error: "No response stream" }, { status: 500 });
    }

    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              if (!line.startsWith("data: ")) continue;
              const data = line.slice(6).trim();
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // Skip malformed chunks
              }
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
