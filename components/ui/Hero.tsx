'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

const logoVariants: any = {
  hidden: { opacity: 0, scale: 0.85, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

const Hero = () => {
  return (
    <section className="relative z-0 w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/video/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={logoVariants}>
          <Image src="/Outlook-ZENJI.png" alt="ZENJI LOGO" width={400} height={400} priority />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md"
        >
          Discover the New Drop
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl sm:text-2xl text-zinc-200 max-w-3xl mx-auto mb-10 drop-shadow"
        >
          Experience the latest collection of premium quality apparel.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/collections"
            className="bg-red-700 text-white hover:text-red-700 hover:bg-white px-8 py-3 rounded-md font-semibold transition-colors shadow-lg"
          >
            Shop Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/lookbook"
            className="border-2 border-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-700 transition-colors shadow-lg"
          >
            View Lookbook
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
