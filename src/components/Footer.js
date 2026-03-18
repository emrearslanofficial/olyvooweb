import React from "react";
import { Instagram, Linkedin, Music2 } from "lucide-react"; // TikTok ikonu için Music2 kullanıldı (stil benzer)
import MotionWrapper from "./MotionWrapper";

const Footer = () => {
  return (
    <footer className="py-12 scroll-mt-24 border-t border-white/10 bg-darkBg text-center text-gray-400 relative overflow-hidden">
      <MotionWrapper>
      {/* ✨ Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[300px] h-[300px] bg-gradient-to-r from-olyvooPurple to-olyvooBlue rounded-full blur-[160px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* 🌐 Logo & Brand */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Olyvoo Logo" className="w-7 h-7" />
          <h1 className="text-xl font-semibold text-white">Olyvoo</h1>
        </div>

        {/* 🔗 Social Links */}
        <div className="flex gap-6">
          <a
            href="https://instagram.com/olyvooapp"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram size={22} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="TikTok"
          >
            <Music2 size={22} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* 📄 Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Olyvoo · by Emmedya
        </p>
      </div>
      </MotionWrapper>
    </footer>
  );
};

export default Footer;
