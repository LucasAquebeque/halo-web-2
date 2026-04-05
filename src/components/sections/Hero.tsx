export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <div className="max-w-2xl mt-24 md:mt-32">
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Bespoke AV/IT, <br/>lighting & shading
              <br />
              for luxury yachts and residences.
            </h1>

            <p className="mt-6 text-white/80 text-base md:text-lg">
              Seamless, intuitive systems designed and integrated for high-end marine and residential environments.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}