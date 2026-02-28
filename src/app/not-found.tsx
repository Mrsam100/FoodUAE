"use client";

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0505] text-[#F7F5EF] flex items-center justify-center px-5">
      <div className="text-center max-w-[500px]">
        <div className="mb-8">
          <span className="text-[120px] md:text-[180px] font-bold text-[#E6FF8C] leading-none">
            404
          </span>
        </div>
        
        <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-4">
          Page Not Found
        </h1>
        
        <p className="text-[16px] md:text-[18px] text-[#8E8A85] mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track to eating real food.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-[#E6FF8C] text-[#0A0505] px-6 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          
          <button 
            onClick={() => { if (window.history.length > 1) { window.history.back(); } else { window.location.href = '/'; } }}
            className="inline-flex items-center gap-2 border border-[#F7F5EF]/30 text-[#F7F5EF] px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-[#F7F5EF]/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#201D1D]">
          <p className="text-[13px] text-[#8E8A85]/60">
            Real Food UAE by Lycoris Design Studios
          </p>
        </div>
      </div>
    </main>
  );
}