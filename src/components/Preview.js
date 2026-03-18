import React from "react";
import MotionWrapper from "./MotionWrapper";

const Preview = () => {
  return (
    <section id="preview" className="py-20 scroll-mt-24 bg-white/5">
      <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          App Preview
        </h2>
        <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto">
          Take a closer look at Olyvoo — where chat, connection, and culture come together beautifully.
        </p>

        {/* ✅ Preview Screens */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* 🖼️ Home Screen */}
          <div className="rounded-2xl border border-white/10 p-4 bg-darkBg/60 hover:bg-darkBg/80 transition flex flex-col items-center">
            <div className="w-full rounded-xl overflow-hidden border border-white/10 aspect-[9/16] bg-black flex items-center justify-center">
              <img
                src="/screens/home.png"
                alt="Home Screen"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-center text-white mt-4 font-semibold">Home</h3>
            <p className="text-center text-gray-400 text-sm">
              Discover new people and explore trending rooms.
            </p>
          </div>

          {/* 🖼️ Chat Screen */}
          <div className="rounded-2xl border border-white/10 p-4 bg-darkBg/60 hover:bg-darkBg/80 transition flex flex-col items-center">
            <div className="w-full rounded-xl overflow-hidden border border-white/10 aspect-[9/16] bg-black flex items-center justify-center">
              <img
                src="/screens/chat.png"
                alt="Chat Screen"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-center text-white mt-4 font-semibold">Chat</h3>
            <p className="text-center text-gray-400 text-sm">
              Real-time global conversations with instant translations.
            </p>
          </div>

          {/* 🖼️ Profile Screen */}
          <div className="rounded-2xl border border-white/10 p-4 bg-darkBg/60 hover:bg-darkBg/80 transition flex flex-col items-center">
            <div className="w-full rounded-xl overflow-hidden border border-white/10 aspect-[9/16] bg-black flex items-center justify-center">
              <img
                src="/screens/profile.png"
                alt="Profile Screen"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <h3 className="text-center text-white mt-4 font-semibold">Profile</h3>
            <p className="text-center text-gray-400 text-sm">
              Customize your profile, show your style, and connect authentically.
            </p>
          </div>
        </div>
      </div>
      </MotionWrapper>
    </section>
  );
};

export default Preview;
