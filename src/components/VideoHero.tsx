import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface VideoHeroProps {
  videoUrl: string;
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
    gradientColor?: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoUrl,
  title = "Welcome to Irugoo",
  subtitle = {
    regular: "Transform your ideas into ",
    gradient: "beautiful digital experiences",
    gradientColor: "#89BF42"
  },
  description = "Transform your ideas into reality with our comprehensive suite of development tools and resources.",
  ctaText = "Get Started",
  ctaHref = "/signup",
}) => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-105"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-screen-xl w-full mx-auto px-4 py-24 md:py-32">
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <div className="text-sm text-gray-200 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-white/10 via-white/5 to-transparent border-[2px] border-white/10 rounded-3xl w-fit">
            {title}
            <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          </div>

          <h1 className="tracking-tighter font-geist text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-white">{subtitle.regular}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89BF42] to-[#89BF42]/80">
              {subtitle.gradient}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            {description}
          </p>

          <div className="flex items-center justify-center gap-x-4 mt-8">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg"
            >
              {ctaText}
            </a>

            <a
              href="#learn-more"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
