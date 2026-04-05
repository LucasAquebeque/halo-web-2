"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        
        {/* LOGO */}
        <div className="relative w-[260px] md:w-[300px] h-[70px] md:h-[80px] -ml-6 md:-ml-10">
          <Image
            src="/logo_white_clean.png"
            alt="Halo"
            fill
            sizes="(max-width: 768px) 320px, 360px"
            className="object-contain"
            priority
          />
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-white">
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