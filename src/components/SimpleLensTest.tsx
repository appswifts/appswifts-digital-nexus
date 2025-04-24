import React from 'react';
import { Section } from '@/components/ui/Section';
import { Lens } from '@/components/ui/lens';

export const SimpleLensTest = () => {
  return (
    <Section
      id="lens-test"
      title="Simple Test"
      subtitle="Lens Component Test"
      description="A simple test of the Lens component with minimal dependencies."
      background="white"
    >
      <div className="max-w-md mx-auto">
        <Lens>
          <img
            src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Test image"
            className="w-full h-auto rounded-lg"
          />
        </Lens>
      </div>
    </Section>
  );
};

export default SimpleLensTest;
