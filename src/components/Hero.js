import React from "react";
import MotionWrapper from "./MotionWrapper";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-36 pb-24 bg-gradient-to-b from-olyvooPurple/20 to-olyvooBlue/10 text-center relative overflow-hidden"
    >
      <MotionWrapper>
      {/* 🔵 Animated “O” background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-72 h-72 rounded-full border-4 border-olyvooPurple/40 animate-spin-slow blur-3xl opacity-30"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-olyvooPurple/30 to-olyvooBlue/30 blur-2xl opacity-20"></div>
      </div>

      {/* Başlık */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
        Meet. Match.{" "}
        <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_15px_rgba(127,0,255,0.9)] transition-all duration-500 cursor-default">
          Discover.
        </span>
      </h1>

      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        A next-generation social platform that connects you with the world —
        powered by instant translations and real-time global chat.
      </p>

      {/* ✅ App Store & Play Store Badges */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        <a href="#" className="hover:scale-105 transition">
          <img
            src="/appstore-badge.svg"
            alt="Download on the App Store"
            className="h-14"
          />
        </a>
        <a href="#" className="hover:scale-105 transition">
          <img
            src="/playstore-badge.svg"
            alt="Get it on Google Play"
            className="h-14"
          />
        </a>
      </div>
      </MotionWrapper>
    </section>
  );
};

export default Hero;
