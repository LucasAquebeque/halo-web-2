const services = [
  {
    number: "01",
    title: "Marine Refit & Upgrades",
    description: "Transforming existing yachts with bespoke technology, IT, lighting, and shading systems, modernising performance while maintaining seamless integration and onboard comfort.",
  },
  {
    number: "02",
    title: "Marine New Build Integration",
    description: "Designing and installing bespoke AV, IT, lighting, and shading systems for new yachts, creating intuitive, luxurious, and future-proof onboard experiences.",
  },
  {
    number: "03",
    title: "Residential & Luxury Villa Designs",
    description: "Crafting bespoke environments for homes and villas, harmonising technology, lighting, shading, climate and security to enhance comfort, ambiance, and lifestyle.",
  },
  {
    number: "04",
    title: "Service & Support",
    description: "Providing ongoing maintenance, on-site or remote support for all technology ensuring your yacht or home remains reliable, effortless, and fully under control.",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-[#005671] text-xs font-semibold tracking-widest uppercase mb-4">
          What We Do
        </p>

        <h2 className="text-gray-900 text-3xl md:text-4xl font-light leading-tight mb-16 max-w-xl">
          Bespoke solutions for every space and lifestyle.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {services.map((service) => (
            <div key={service.number} className="bg-white p-10">
              <span className="text-[#005671] text-xs font-semibold tracking-widest mb-4 block">
                {service.number}
              </span>
              <h3 className="text-gray-900 text-xl font-light mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}