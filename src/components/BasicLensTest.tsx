import React from 'react';
import { Section } from '@/components/ui/Section';

export const BasicLensTest = () => {
  return (
    <Section
      id="basic-lens-test"
      title="Basic Test"
      subtitle="Basic Component Test"
      description="A basic test without the Lens component to check for other issues."
      background="white"
    >
      <div className="max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Test image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default BasicLensTest;
