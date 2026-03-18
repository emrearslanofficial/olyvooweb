import React from "react";
import MotionWrapper from "./MotionWrapper";

const items = [
  { 
    title: "Global Chat Rooms", 
    desc: "Connect with people from over 100 countries and start conversations instantly.", 
    emoji: "🌍" 
  },
  { 
    title: "Instant Translations", 
    desc: "Language barriers are gone. Chat with anyone, and messages are translated instantly.", 
    emoji: "💬" 
  },
  { 
    title: "Gifts & Reactions", 
    desc: "Express yourself with stylish gifts, reactions, and animations during chats.", 
    emoji: "🎁" 
  },
  { 
    title: "Premium Experience", 
    desc: "Enjoy an ad-free, faster, and more exclusive experience with Olyvoo Premium.", 
    emoji: "🚀" 
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 scroll-mt-24">
       <MotionWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Powerful Features
        </h2>
        <p className="text-gray-300 text-center mt-3 max-w-2xl mx-auto">
          Everything you need to make real connections and global friendships.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((it) => (
            <div 
              key={it.title} 
              className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="text-3xl">{it.emoji}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
       </MotionWrapper>
    </section>
  );
};

export default Features;
