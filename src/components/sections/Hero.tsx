export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-end pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="max-w-xl">

            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
              Bespoke technology, lighting and shading systems, thoughtfully designed and integrated for luxury spaces at sea and on land.
            </h1>

            <p className="mt-6 text-white/80 text-sm md:text-base">
              Seamless, reliable, and intuitive solutions tailored to each space and client, covering AV, IT, lighting, shading, and control systems.
            </p>

            <a href="#solutions" className="mt-8 inline-block bg-[#005671] text-white text-sm px-8 py-3 hover:bg-[#005671]/80 transition-colors rounded-sm">
              Explore solutions
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}