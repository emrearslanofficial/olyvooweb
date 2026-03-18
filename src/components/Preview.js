import React from "react";
import MotionWrapper from "./MotionWrapper";

const screens = [
  { src: "/screens/2.png", alt: "Home", title: "Home", description: "Discover new people." },
  { src: "/screens/3.png", alt: "Chat", title: "Chat", description: "Global conversations." },
  { src: "/screens/4.png", alt: "Profile", title: "Profile", description: "Show your style." },
  { src: "/screens/5.png", alt: "Explore", title: "Explore", description: "Find communities." },
  { src: "/screens/6.png", alt: "Settings", title: "Settings", description: "Manage account." },
];

const Preview = () => {
  return (
    <section id="preview" className="py-16 scroll-mt-24 bg-white/5">
      <MotionWrapper>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
            App Preview
          </h2>
          <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto text-sm">
            Take a closer look at Olyvoo — where chat, connection, and culture come together.
          </p>

          {/* ✅ 5 Kartı Yan Yana Sığdıran Grid Yapısı */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {screens.map((screen, index) => (
              <div 
                key={index}
                className="rounded-xl border border-white/5 p-2.5 bg-[#0a0a0a]/60 hover:bg-[#0a0a0a]/80 transition-all flex flex-col items-center"
              >
                <div className="w-full rounded-lg overflow-hidden border border-white/10 aspect-[9/16] bg-black flex items-center justify-center relative">
                  <img
                    src={process.env.PUBLIC_URL + screen.src}
                    alt={screen.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-center text-white mt-3 font-semibold text-sm">
                  {screen.title}
                </h3>
                <p className="text-center text-gray-500 text-[11px] mt-1 px-1 line-clamp-2">
                  {screen.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Preview;