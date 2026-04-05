import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f5c6e] text-white pt-16 pb-8 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="relative left-[-24px] md:left-[-48px]">
            <div className="relative w-[260px] md:w-[320px] h-[80px] md:h-[100px] -ml-6 md:-ml-10">
                <Image
                    src="/logo_white_clean.png"
                    alt="Halo"
                    fill
                    sizes="(max-width: 768px) 50px, 320px"
                    className="object-contain"
                />
                </div>
            <p className="mt-4 text-sm text-white/80">
              Bespoke AV/IT systems for luxury yachts and residences.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-white/60 uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-white/60 uppercase">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>AV / IT</li>
              <li>Lighting</li>
              <li>Shading</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-white/60 uppercase">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>info@avithalo.com</li>
              <li>Palma de Mallorca</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} HALO
        </div>

      </div>
    </footer>
  );
}