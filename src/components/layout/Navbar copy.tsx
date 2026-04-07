"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[36px] left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[90px]">

        {/* LOGO */}
        <div
          className={`relative transition-all duration-500 -ml-6 md:-ml-16 ${
            scrolled
              ? "w-[220px] md:w-[260px] h-[55px] md:h-[65px]"
              : "w-[280px] md:w-[340px] h-[75px] md:h-[85px]"
          }`}
        >
          <Image
            src="/logo_white_clean.png"
            alt="Halo"
            fill
            sizes="(max-width: 768px) 280px, 340px"
            className="object-contain object-left"
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