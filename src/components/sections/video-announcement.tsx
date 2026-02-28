import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FOOD_ASSETS } from '@/lib/food-assets';

/**
 * VideoAnnouncement Section
 * 
 * Featuring:
 * - Blurred background glow (Video Glow effect from design system)
 * - Play button overlay with "Watch Super Bowl LX Spot"
 * - Video lightbox/lightbox functionality for the main spot
 * - Ambient background video loop
 */

const VideoAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div id="hero-video" className="relative w-full overflow-hidden bg-[#0A0404] py-20 lg:py-32">
      <div className="container relative mx-auto px-6 lg:px-10">
        
        {/* The Glow Container - Custom Design Treatment */}
        <div className="video-glow-container relative mx-auto max-w-[1100px] cursor-pointer group" onClick={toggleModal}>
          
          {/* Background Ambient Component */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-[#1C1C1E] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <Image
              src={FOOD_ASSETS.foodSpread}
              alt="Real Food Wins Video Thumbnail"
              fill
              className="object-cover transition-opacity duration-700 group-hover:opacity-0"
              priority
            />
            {/* Ambient subtle background loop */}
            <video
              src="https://realfood.gov/video/bgv.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-4 rounded-full bg-black/40 px-6 py-3 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:bg-black/60 group-hover:scale-105">
                <span className="text-lg font-medium tracking-tight text-white/90">
                  Watch Super Bowl LX Spot
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg">
                  <Play className="fill-current" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300 backdrop-blur-sm"
          onClick={toggleModal}
        >
          <button 
            className="absolute top-8 right-8 z-[60] text-white/70 hover:text-white transition-colors"
            onClick={toggleModal}
            aria-label="Close video"
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src="https://realfood.gov/video/Real_Food_by_Mike_Tyson.mp4"
              controls
              autoPlay
              className="h-full w-full object-contain bg-black"
            >
              <track kind="captions" src="/transcript.vtt" label="English" default />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Custom Styles Injection for the Glow effect defined in globals but isolated here if needed */}
      <style jsx global>{`
        .video-glow-container::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(226, 244, 159, 0.12) 0%, transparent 65%);
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default VideoAnnouncement;