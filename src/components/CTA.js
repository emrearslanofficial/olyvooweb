import React from "react";
import MotionWrapper from "./MotionWrapper";

const CTA = () => {
  return (
    <section
      id="download"
      className="py-20 relative overflow-hidden scroll-mt-24 bg-gradient-to-b from-darkBg via-darkBg to-olyvooPurple/10"
    >
      <MotionWrapper>
      {/* 🔮 Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[400px] h-[400px] bg-gradient-to-r from-olyvooPurple to-olyvooBlue rounded-full blur-[180px] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
          Join Olyvoo Today
        </h3>
        <p className="mt-3 text-gray-300 text-lg max-w-xl mx-auto">
          Be part of the new generation of global connections — meet, match, and
          chat with people from all around the world.
        </p>

        {/* 🚀 Call To Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <a
            href="#"
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-olyvooPurple to-olyvooBlue hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(127,0,255,0.6)]"
          >
            Join Now
          </a>

          <a
            href="#"
            className="px-8 py-3 rounded-full font-semibold text-white border border-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
};

export default CTA;
