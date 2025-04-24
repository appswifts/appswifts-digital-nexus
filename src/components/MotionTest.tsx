import React from 'react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

export const MotionTest = () => {
  return (
    <Section
      id="motion-test"
      title="Motion Test"
      subtitle="Framer Motion Test"
      description="A simple test of the framer-motion library."
      background="white"
    >
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-100 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-2">Motion Component</h3>
          <p className="text-gray-700">
            This is a simple test of the framer-motion library. If you can see this, framer-motion is working correctly.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default MotionTest;
