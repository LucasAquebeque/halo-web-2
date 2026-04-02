import Link from "next/link"

const navLinks = ["home", "about halo", "solutions", "portfolio"]

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-semibold text-xl tracking-wide">
          HALO
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/70 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium">
          Contact
        </button>

      </div>
    </div>
  )
}