const solutions = [
  { number: "01", title: "Lighting Design", description: "Lighting that shapes the ambiance, enhancing every moment with elegance and control." },
  { number: "02", title: "Audio & Video", description: "Immersive audiovisual experiences designed to delight, whether onboard or at home." },
  { number: "03", title: "Motorised Shading", description: "Motorised blinds and curtains that harmonise naturally with light, atmosphere, and comfort." },
  { number: "04", title: "Control Systems", description: "Seamless operation of technology, letting every system work intuitively and effortlessly." },
  { number: "05", title: "Private Cinema", description: "Cinematic spaces crafted for unparalleled viewing, tailored to your lifestyle and environment." },
  { number: "06", title: "Hi-Fi & Speakers", description: "Rich, enveloping sound that transforms rooms into truly captivating experiences." },
  { number: "07", title: "Multi-room Audio", description: "Audio that flows seamlessly from room to room, delivering perfect harmony throughout." },
  { number: "08", title: "Networking & IT", description: "Robust connectivity that keeps every system, device, and space fully connected and reliable." },
  { number: "09", title: "Security", description: "Intelligent monitoring and access control that protects without intruding." },
  { number: "10", title: "Maintenance", description: "Responsive care and maintenance, ensuring every bespoke system performs flawlessly over time." },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-[#005671] text-xs font-semibold tracking-widest uppercase mb-4">
          Solutions
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-light leading-tight max-w-xl">
            Bespoke Solutions for Every Space and Lifestyle
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            From yachts to luxury residences, we create fully integrated technology, lighting, and shading systems that work seamlessly and intuitively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {solutions.map((solution) => (
            <div key={solution.number} className="bg-gray-50 p-8 hover:bg-white transition-colors">
              <span className="text-[#005671] text-xs font-semibold tracking-widest mb-3 block">
                {solution.number}
              </span>
              <h3 className="text-gray-900 text-lg font-light mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}