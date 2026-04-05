export default function Services() {
  const services = [
    {
      title: "AV & IT Integration",
      description:
        "Seamless audio-visual and network systems designed for reliability and performance in demanding environments.",
    },
    {
      title: "Lighting Systems",
      description:
        "Intelligent lighting solutions tailored to enhance atmosphere, efficiency, and user experience.",
    },
    {
      title: "Shading Systems",
      description:
        "Automated shading systems that provide comfort, privacy, and energy efficiency.",
    },
    {
      title: "Control Systems",
      description:
        "Unified control interfaces delivering intuitive management of all integrated technologies.",
    },
  ];

  return (
    <section id="solutions" className="bg-white text-black py-24">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* TITULO */}
        <h2 className="text-3xl md:text-5xl font-display font-light max-w-2xl">
          Integrated technology solutions designed for exceptional spaces.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-black/10 p-8
                         hover:border-black
                         transition-all duration-300"
            >
              <h3 className="text-xl font-medium mb-4">
                {service.title}
              </h3>

              <p className="text-black/60 text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                → Learn more
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}