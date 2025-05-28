'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="bg-red-500 p-8 rounded-lg text-white">
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-red-500 p-8 rounded-lg text-white"
      >
        Test Div - Should be red and animate on load
      </motion.div>
    </main>
  );
} 