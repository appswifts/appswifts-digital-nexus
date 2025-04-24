import React from 'react';
import { Section } from '@/components/ui/Section';
import { ImageOnly, ImageAndReactComponent } from '@/components/ui/lens-demo';

export const LensShowcase = () => {
  return (
    <Section
      id="lens-showcase"
      title="Interactive Elements"
      subtitle="Magnifying Lens"
      description="Explore our interactive magnifying lens component that adds a unique zoom effect to images and content."
      background="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Image Only Example</h3>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            Hover over the image to see the magnifying lens effect. The text below the image blurs when the lens is active.
          </p>
          <ImageOnly />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Full Component Example</h3>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            This example shows how the lens can be applied to an entire component, including images and text.
          </p>
          <ImageAndReactComponent />
        </div>
      </div>
    </Section>
  );
};

export default LensShowcase;
