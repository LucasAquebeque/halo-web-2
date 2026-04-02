import Navbar from "@/components/layout/Navbar"
import TopBar from "@/components/layout/TopBar"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Imagen */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <TopBar />
        <Navbar />
      </div>

      {/* Contenido */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-32 md:pb-40">

        <h1 className="
          text-white 
          text-[42px] 
          md:text-[72px] 
          font-bold 
          leading-[1.05]
          tracking-[-0.02em]
          max-w-3xl
        ">
          Making technology easier
        </h1>

        <p className="
          mt-6 
          text-white/80 
          text-lg 
          max-w-xl
        ">
          Marine Automation and Smart Home Expert. Audio Video Entertainment Integrator.
        </p>

        <div className="mt-8">
          <button className="
            bg-white 
            text-black 
            px-6 
            py-3 
            rounded-lg 
            font-medium
            hover:opacity-90
            transition
          ">
            Contact
          </button>
        </div>

      </div>
    </section>
  )
}