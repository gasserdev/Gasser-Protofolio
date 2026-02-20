import { For } from 'solid-js';


const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin panel with real-time inventory tracking, sales analytics, and customer management features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Tailwind"]
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "High-performance landing page focused on conversion optimization and smooth animations using Framer Motion.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    tags: ["Next.js", "Framer"]
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "A social platform featuring instant messaging, presence indicators, and group chat functionality with full type safety.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    tags: ["TypeScript", "Socket.io"]
  }
];

function Projects() {
  return (
    <section class="py-24 px-6 bg-slate-50 dark:bg-[#12121a]/50" id="projects">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-4">
            <span class="text-[#5048e5] font-bold text-sm uppercase tracking-widest">Featured Work</span>
            <h2 class="text-4xl font-black tracking-tight">Recent Projects</h2>
            <p class="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              A selection of my recent works ranging from complex dashboards to high-conversion landing pages.
            </p>
          </div>
          <a class="group text-[#5048e5] font-bold flex items-center gap-2 hover:gap-3 transition-all" href="https://github.com/gasserdev?tab=repositories">
            View All Projects <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <For each={projects}>
            {(project) => (
              <div class="group relative flex flex-col bg-[#f6f6f8] dark:bg-[#12121a] rounded-2xl border border-slate-200/10 overflow-hidden hover:shadow-2xl hover:shadow-[#5048e5]/10 hover:border-[#5048e5]/30 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#5048e5]/0 via-transparent to-[#5048e5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="aspect-video w-full overflow-hidden">
                  <div 
                    class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url("${project.image}")` }}
                    role="img"
                    aria-label={project.title}
                  ></div>
                </div>
                <div class="p-8 flex flex-col flex-1 gap-4 relative z-10">
                  <div class="flex gap-2 flex-wrap">
                    <For each={project.tags}>
                      {(tag) => (
                        <span class="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#5048e5]/20">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                  <h3 class="text-2xl font-bold group-hover:text-[#5048e5] transition-colors">{project.title}</h3>
                  <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div class="pt-4 flex items-center gap-4">
                    <a 
                      href={project.demoLink || '#'} 
                      class="text-sm font-bold flex items-center gap-1 hover:text-[#5048e5] group/btn transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span class="material-symbols-outlined text-lg group-hover/btn:rotate-12 transition-transform">link</span> Demo
                    </a>
                    <a 
                      href={project.githubLink || '#'} 
                      class="text-sm font-bold flex items-center gap-1 hover:text-[#5048e5] group/btn transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span class="material-symbols-outlined text-lg group-hover/btn:scale-110 transition-transform">code</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}

export default Projects;