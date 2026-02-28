"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * HeroVideo Component
 * Clones the video section with a glowing placeholder and play button overlay.
 */
export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Asset URLs from provided data
  const placeholderImage = FOOD_ASSETS.foodSpread;
  const bgVideo = "https://realfood.gov/video/bgv.mp4";
  const mainVideo = "https://realfood.gov/video/Real_Food_by_Mike_Tyson.mp4";

  return (
    <div id="hero-video" className="relative w-full overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="hero-glow w-full max-w-5xl aspect-video rounded-3xl"
          style={{ 
            backgroundImage: `url(${placeholderImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.2)',
            filter: 'blur(100px)',
            opacity: 0.4
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="relative mx-auto w-full max-w-[1120px]">
          {/* Main Video Container */}
          <div 
            className="group relative aspect-video w-full overflow-hidden rounded-[24px] border border-white/10 glass-card transition-all duration-700 hover:border-white/20"
            role="button"
            tabIndex={0}
            aria-label="Play video"
            onClick={() => setIsPlaying(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsPlaying(true); } }}
          >
            {/* Background Loop / Poster */}
            {!isPlaying ? (
              <>
                <img
                  src={placeholderImage}
                  alt="Video preview thumbnail"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
                >
                  <source src={bgVideo} type="video/mp4" />
                </video>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex items-center gap-4 rounded-full bg-black/60 px-6 py-3 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-black/80 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e8ff99]">
                    <span className="text-white text-lg font-semibold tracking-tight whitespace-nowrap">
                      Watch Super Bowl LX Spot
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </button>
                </div>
              </>
            ) : (
              /* Fullscreen-esque Player (Simplified for clone) */
              <video 
                autoPlay 
                controls 
                className="absolute inset-0 h-full w-full object-cover"
                onEnded={() => setIsPlaying(false)}
              >
                <source src={mainVideo} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-glow {
          filter: blur(80px);
          opacity: 0.6;
          pointer-events: none;
          position: absolute;
          z-index: -1;
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
          .rounded-[24px] {
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}