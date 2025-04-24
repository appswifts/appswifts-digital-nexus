import React from "react";
import { cn } from "@/lib/utils";

interface MobileAppCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
  category?: string;
  videoUrl: string;
}

export const MobileAppCard: React.FC<MobileAppCardProps> = ({
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
      {/* Background without overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background image */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Category tag */}
        {category && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium shadow-md">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Mobile phone with video */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[360px] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[36px] border-[8px] border-black bg-black shadow-2xl overflow-hidden">
            {/* Video inside phone */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-[28px] overflow-hidden"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Phone details */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-10"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-xl"></div>
        </div>
      </div>

      {/* Content hidden by default, revealed on hover */}
      <div className="relative z-10 flex flex-col p-6 h-full bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex-1">
          {/* Text */}
          <h3 className="text-xl font-semibold mb-3 text-white transition-all duration-300 group-hover:translate-y-0">{title}</h3>
          <p className="text-gray-200 transition-all duration-300 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">{description}</p>
        </div>

        {/* CTA Button */}
        <div className="mt-6 transform translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={link}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
