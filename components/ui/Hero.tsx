import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
          Discover the New Drop
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-zinc-200 max-w-3xl mx-auto mb-10 drop-shadow">
          Experience the latest collection of premium quality apparel.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/collections"
            className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-zinc-200 transition-colors"
          >
            Shop Now
          </a>
          <a
            href="/lookbook"
            className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors"
          >
            View Lookbook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
