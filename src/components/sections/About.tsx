export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-[#005671] text-xs font-semibold tracking-widest uppercase mb-4">
          About Halo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* TITULAR */}
          <div>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-light leading-tight">
              25 years delivering bespoke technology for the world's finest yachts and residences.
            </h2>
          </div>

          {/* PÁRRAFOS */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">
            <p>
              With over 25 years of experience in high-end marine and residential projects, Halo delivers solutions that are both reliable and discreet.
            </p>
            <p>
              As specialists in designing, integrating, and supporting bespoke technology, lighting and shading systems, we help clients create spaces that are intuitive, comfortable, and completely under control — whether at sea or in luxury residences and villas.
            </p>
            <p>
              Privately owned and independently managed, Halo combines engineering expertise with a boutique approach, bringing stability, discretion, and a commitment to making every space work exactly as it should. Our solutions leverage industry-leading platforms such as Crestron and Lutron, ensuring seamless integration across audio, video, control, networking, lighting, shading, climate and security systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}