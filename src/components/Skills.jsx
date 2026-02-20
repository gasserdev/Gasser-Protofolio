import { For } from 'solid-js';

function Skills() {
  const skills = [
    { name: "JavaScript", icon: "javascript" },
    { name: "Solid", icon: "data_object" },
    { name: "Git", icon: "token" },
    { name: "Tailwind CSS", icon: "css" },
    { name: "Vercel", icon: "cloud_sync" },
    { name: "Responsive", icon: "devices" }
  ];

  return (
    <section class="py-24 px-6 relative overflow-hidden" id="skills">
      <div class="absolute inset-0 bg-gradient-to-b from-[#5048e5]/5 via-transparent to-transparent"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-8">
            <span class="text-[#5048e5] font-bold text-sm uppercase tracking-widest">Expertise</span>
            <h2 class="text-4xl font-black tracking-tight">Technical Proficiency</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              I focus on modern web standards and building maintainable codebases. My toolkit is optimized for speed, scalability, and user experience.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200/10 shadow-lg hover:shadow-xl hover:border-[#5048e5]/30 transition-all group">
                <span class="material-symbols-outlined text-3xl text-[#5048e5] mb-4 group-hover:scale-110 transition-transform">terminal</span>
                <h4 class="font-bold mb-2">Clean Code</h4>
                <p class="text-xs text-slate-500">Writing readable, modular, and DRY code.</p>
              </div>
              <div class="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200/10 shadow-lg hover:shadow-xl hover:border-[#5048e5]/30 transition-all group">
                <span class="material-symbols-outlined text-3xl text-[#5048e5] mb-4 group-hover:scale-110 transition-transform">speed</span>
                <h4 class="font-bold mb-2">Performance</h4>
                <p class="text-xs text-slate-500">Optimized bundles and lightning fast loads.</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <For each={skills}>
              {(skill) => (
                <div class="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-[#12121a] border border-slate-200/10 group hover:border-[#5048e5]/50 hover:shadow-lg hover:shadow-[#5048e5]/10 transition-all">
                  <div class="size-12 rounded-xl bg-gradient-to-br from-[#5048e5]/10 to-[#5048e5]/5 flex items-center justify-center text-[#5048e5] mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    <span class="material-symbols-outlined text-2xl">{skill.icon}</span>
                  </div>
                  <span class="font-bold text-sm tracking-tight">{skill.name}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;