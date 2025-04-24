import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SimpleCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: string;
  className?: string;
}

export const SimpleCard = ({
  title,
  description,
  icon,
  image,
  className,
}: SimpleCardProps) => {
  return (
    <div className={cn('premium-card premium-hover', className)}>
      {image && (
        <div className="aspect-w-16 aspect-h-9 bg-premium-offwhite rounded-lg mb-4 overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}
      {icon && <div className="text-primary mb-4">{icon}</div>}
      <h3 className="mb-2">{title}</h3>
      {description && <p className="text-premium-gray">{description}</p>}
    </div>
  );
};
