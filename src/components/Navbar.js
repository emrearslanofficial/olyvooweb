import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* ✅ Logo Area */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Olyvoo Logo"
            className="w-8 h-8"
          />
          {/* ✨ Beyaz yazı + Glow efekti */}
          <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(127,0,255,0.8)] transition-all duration-300">
            Olyvoo
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#home" className="hover:text-olyvooBlue transition">Home</a></li>
          <li><a href="#features" className="hover:text-olyvooBlue transition">Features</a></li>
          <li><a href="#preview" className="hover:text-olyvooBlue transition">Preview</a></li>
          <li><a href="#download" className="hover:text-olyvooBlue transition">Download</a></li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-olyvooPurple to-olyvooBlue text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
          Download App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
  