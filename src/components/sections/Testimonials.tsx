const testimonials = [
  {
    quote: "Testimonial coming soon.",
    name: "Client name",
    role: "Captain, M/Y Vessel Name",
  },
  {
    quote: "Testimonial coming soon.",
    name: "Client name",
    role: "Owner, Luxury Residence Mallorca",
  },
  {
    quote: "Testimonial coming soon.",
    name: "Client name",
    role: "Project Manager, New Build",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#005671] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
          What Our Clients Say
        </p>

        <h2 className="text-white text-3xl md:text-4xl font-light leading-tight mb-16 max-w-xl">
          Trusted by captains, owners and project managers across the Mediterranean.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#005671] p-10">
              <p className="text-white/80 text-base leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                <p className="text-white/50 text-xs mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}