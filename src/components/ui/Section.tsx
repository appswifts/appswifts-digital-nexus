import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'offwhite' | 'gradient' | 'dark';
}

export const Section = ({
  id,
  title,
  subtitle,
  description,
  children,
  className,
  background = 'white',
}: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    offwhite: 'bg-premium-offwhite',
    gradient: 'bg-gradient-to-r from-primary/10 to-accent/10',
    dark: 'bg-premium-charcoal text-white',
  };

  return (
    <section id={id} className={cn('py-24 md:py-32 flex justify-center w-full', bgClasses[background], className)}>
      <div className="container-padding w-full max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className={cn("section-title mb-4 inline-flex items-center group", background === 'dark' ? 'text-white' : '')}>
            {title}{' '}
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <h2 className={cn("section-heading mb-4", background === 'dark' ? 'text-white' : '')}>
            {subtitle.split(' ').map((word, index, array) =>
              index === array.length - 1 ? (
                <span key={index} className="section-heading-gradient">{word} </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className={cn("section-subheading", background === 'dark' ? 'text-gray-200' : '')}>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};
