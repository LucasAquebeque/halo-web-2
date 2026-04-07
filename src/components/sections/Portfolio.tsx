const projects = [
  {
    category: "Marine Refit",
    name: "Project coming soon",
    location: "Palma de Mallorca",
    year: "2024",
    tags: ["Crestron", "Lutron"],
  },
  {
    category: "New Build",
    name: "Project coming soon",
    location: "Mediterranean",
    year: "2024",
    tags: ["L-Acoustics", "Crestron"],
  },
  {
    category: "Residential",
    name: "Project coming soon",
    location: "Mallorca",
    year: "2024",
    tags: ["Lutron", "Control4"],
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <p className="text-[#005671] text-xs font-semibold tracking-widest uppercase mb-4">
          Projects
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-light leading-tight max-w-xl">
            Featured Projects
          </h2>
          <a href="/projects" className="inline-block border border-[#005671] text-[#005671] text-sm px-8 py-3 hover:bg-[#005671] hover:text-white transition-colors rounded-sm">
            View all projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">

              {/* IMAGE PLACEHOLDER */}
              <div className="w-full h-[280px] bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo coming soon</span>
              </div>

              {/* INFO */}
              <div>
                <span className="inline-block text-[#005671] text-xs font-semibold tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-gray-900 text-lg font-light mb-1">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.location} · {project.year}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs border border-gray-200 text-gray-500 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}