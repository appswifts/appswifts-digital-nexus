import React from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
  category?: string;
  videoUrl: string;
}

export const VideoBackgroundCard: React.FC<VideoBackgroundCardProps> = ({
  title,
  description,
  image,
  link,
  className,
  category,
  videoUrl,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.1),0_4px_6px_rgba(0,0,0,.15),0_12px_24px_rgba(0,0,0,.2)]",
        "border border-gray-700/50",
        className,
      )}
    >
      {/* Video background with fallback image - no overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback image (shown while video loads) */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Video background (autoplays) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Category tag */}
        {category && (
          <div className="absolute top-4 right-4 z-30">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium shadow-md">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content hidden by default, revealed on hover */}
      <div className="relative z-10 flex flex-col p-8 h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex-1 mt-auto">
          {/* Text */}
          <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
          <p className="text-gray-200 text-lg opacity-90">{description}</p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href={link}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg"
          >
            Explore Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
