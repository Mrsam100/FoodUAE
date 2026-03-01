"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Search, ArrowUp, Loader2, Sparkles, RotateCcw } from 'lucide-react';

const AIResources = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [askedQuery, setAskedQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const prompts = [
    {
      title: "Overwhelmed Parent on a Budget",
      content: "I'm a parent of three on a tight budget. We usually rely on boxed mac and cheese and chicken nuggets because they are cheap and fast. How can I start incorporating REAL FOOD without spending more money or hours in the kitchen?"
    },
    {
      title: "School Lunch Guilt",
      content: "My child eats school breakfast and lunch and it doesn't feel like REAL FOOD. I don't have time to pack meals every day. Am I failing them? Is there any realistic way to get more REAL FOOD into their day?"
    },
    {
      title: "Pregnant and Barely Functioning",
      content: "I'm pregnant, nauseous, exhausted, and living off crackers — but I want to eat REAL FOOD for my baby. What actually matters in pregnancy? What REAL FOOD options are realistic when you're this tired?"
    }
  ];

  const handleAsk = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    setLoading(true);
    setError('');
    setResponse('');
    setAskedQuery(text);

    // Scroll to response area
    setTimeout(() => {
      responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      // Read the stream
      const reader = res.body?.getReader();
      if (!reader) throw new Error('No response stream');

      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;
        setResponse(fullText);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to get response';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const handleCardClick = (index: number) => {
    const prompt = prompts[index].content;
    handleAsk(prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAsk(query);
    }
  };

  const handleReset = () => {
    setResponse('');
    setError('');
    setAskedQuery('');
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <section className="bg-[#F5F5E9] text-[#0A0202] py-16 md:py-32 lg:py-[160px] font-display overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(36px,6vw,80px)] font-bold leading-[1.0] tracking-[-0.02em] mb-8 max-w-[900px] mx-auto">
            Use AI to get real answers about real food
          </h2>
          <div className="max-w-[760px] mx-auto text-[clamp(16px,1.5vw,22px)] opacity-60 leading-[1.5]">
            <p>
              From the guidelines to your kitchen. Ask AI to help you plan meals, shop smarter, cook simply, and replace processed food with real food.
            </p>
          </div>
        </div>

        {/* AI Input Bar */}
        <div className="max-w-[800px] mx-auto mb-12 relative">
          <div className="ai-input-wrapper flex items-center bg-white rounded-full h-[64px] pl-6 pr-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[rgba(10,2,2,0.1)]">
            <Search className="w-5 h-5 text-[#8E8E8E] mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask AI about real food..."
              disabled={loading}
              className="flex-1 bg-transparent border-none outline-none text-[16px] md:text-[18px] placeholder:text-[#8E8E8E] font-medium min-w-0 disabled:opacity-50"
            />
            <button
              onClick={() => handleAsk(query)}
              disabled={!query.trim() || loading}
              className="bg-[#0A0202] text-white w-[48px] h-[48px] rounded-full flex items-center justify-center hover:bg-[#333] disabled:bg-[#B5B5A5] disabled:cursor-not-allowed transition-colors cursor-pointer shrink-0"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* AI Response Area */}
        {(response || loading || error) && (
          <div ref={responseRef} className="max-w-[800px] mx-auto mb-16">
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-[rgba(10,2,2,0.06)]">
              {/* User's question */}
              {askedQuery && (
                <div className="mb-6 pb-6 border-b border-[rgba(10,2,2,0.06)]">
                  <p className="text-[14px] font-bold text-[#8E8E8E] uppercase tracking-wider mb-2">Your question</p>
                  <p className="text-[16px] font-medium leading-relaxed">{askedQuery}</p>
                </div>
              )}

              {/* AI Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E0F5A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#0A0202]" />
                </div>
                <div className="flex-1 min-w-0">
                  {error ? (
                    <p className="text-[#D00202] text-[16px] font-medium">{error}</p>
                  ) : (
                    <div className="text-[16px] leading-[1.7] font-medium text-[#333] whitespace-pre-wrap">
                      {response}
                      {loading && <span className="inline-block w-2 h-5 bg-[#0A0202] ml-0.5 animate-pulse" />}
                    </div>
                  )}
                </div>
              </div>

              {/* Reset button */}
              {!loading && (response || error) && (
                <div className="mt-6 pt-6 border-t border-[rgba(10,2,2,0.06)] flex justify-end">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-[14px] font-bold text-[#8E8E8E] hover:text-[#0A0202] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Ask another question
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Prompt Cards */}
        {!response && !loading && (
          <>
            <p className="text-center text-[15px] font-bold text-[#8E8E8E] uppercase tracking-widest mb-8">
              Or try one of these prompts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className="bg-transparent border border-[rgba(10,2,2,0.1)] rounded-[32px] p-4 md:p-6 lg:p-8 min-h-[280px] flex flex-col hover:shadow-lg hover:border-[rgba(10,2,2,0.25)] hover:bg-white/50 transition-all duration-300 group cursor-pointer text-left"
                >
                  <h3 className="text-[20px] font-bold mb-6 group-hover:text-[#D00202] transition-colors">
                    {prompt.title}
                  </h3>
                  <div className="font-mono text-[14px] leading-[1.6] opacity-70 text-justify">
                    {prompt.content}
                  </div>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#8E8E8E] group-hover:text-[#D00202] transition-colors">
                      <Sparkles className="w-3.5 h-3.5" />
                      Ask this
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .ai-input-wrapper:focus-within {
          border-color: #D00202;
          box-shadow: 0 4px 25px rgba(208, 2, 2, 0.1);
        }
      `}</style>
    </section>
  );
};

export default AIResources;
