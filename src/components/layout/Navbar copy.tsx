"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // 🔥 importante para refresh
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-[80px]" : "h-[110px]"
        }`}
      >
        {/* LOGO DINÁMICO */}
        <div
          className={`relative transition-all duration-500 -ml-6 md:-ml-10 ${
            scrolled
              ? "w-[220px] md:w-[260px] h-[60px] md:h-[70px]"
              : "w-[320px] md:w-[380px] h-[90px] md:h-[100px]"
          }`}
        >
          <Image
            src="/logo_white_clean.png"
            alt="Halo"
            fill
            sizes="(max-width: 768px) 220px, 380px"
            className="object-contain"
            priority
          />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-white text-sm">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Halo</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#insights" className="nav-link">Insights</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}