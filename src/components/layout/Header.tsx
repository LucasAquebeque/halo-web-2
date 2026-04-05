"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="absolute top-0 left-0 w-full z-50">

            {/* TOPBAR */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
          ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}
        `}
            >
                <div className="bg-[var(--halo-teal)] text-white h-10 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-16 w-full flex justify-end gap-6 text-xs tracking-wide">
                        <span>info@avithalo.com</span>
                        <span>+34 971 495 582</span>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <div
                className={`transition-all duration-700 ease-out
          ${scrolled
                        ? "bg-neutral-900/70 backdrop-blur-xl border-b border-white/10"
                        : "bg-transparent"
                    }
        `}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-20">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <Image
                            src="/logo_white_clean.png"
                            alt="HALO"
                            width={180}
                            height={60}
                            className="h-16 md:h-18 w-auto"
                            priority
                        />
                    </div>

                    {/* NAV */}
                    <nav className="hidden md:flex items-center gap-12 text-[15px] tracking-[0.02em]">

                        {[
                            { name: "Home", href: "#" },
                            { name: "About Halo", href: "#about" },
                            { name: "Solutions", href: "#solutions" },
                            { name: "Projects", href: "#projects" },
                            { name: "Insights", href: "#insights" },
                            { name: "Contact", href: "#contact" },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-white/70 hover:text-white transition-all duration-300 group"
                            >
                                {item.name}

                                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}

                    </nav>
                </div>
            </div>
        </header>
    );
}