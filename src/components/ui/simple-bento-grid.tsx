import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const SimpleBentoGrid: React.FC<BentoGridProps> = ({
  children,
  className,
}) => {
  return (
    <div className="w-full overflow-hidden">
      <div
        className={cn(
          "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface BentoCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
  category?: string;
}

export const SimpleBentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  image,
  link,
  className,
  category,
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
      {/* Full visible image without overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background image with movement effect */}
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

      {/* Content hidden by default, revealed on hover */}
      <div className="relative z-10 flex flex-col p-6 h-full bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="flex-1">
          {/* Text always white for better visibility */}
          <h3 className="text-xl font-semibold mb-3 text-white transition-all duration-300 group-hover:translate-y-0">{title}</h3>
          <p className="text-gray-200 transition-all duration-300 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">{description}</p>
        </div>

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
