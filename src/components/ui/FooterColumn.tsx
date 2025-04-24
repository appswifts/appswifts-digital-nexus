import React, { ReactNode } from 'react';

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="mb-8">
        {title} <span className="text-primary">.</span>
      </h4>
      {children}
    </div>
  );
};
