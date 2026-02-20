function Hero() {
  return (
    <section class="relative min-h-[90vh] pb-3 flex items-center overflow-hidden px-6 hero-gradient">
      {/* Animated Background Elements */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-10 w-64 h-64 bg-[#5048e5]/20 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-[#5048e5]/10 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5048e5]/5 rounded-full blur-[120px]"></div>
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, rgba(80, 72, 229, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl m-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        {/* Left Content */}
        <div class="flex flex-col gap-8">
          <div class="relative inline-flex items-center gap-2">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#5048e5]/50 to-[#6b64e8]/50 rounded-full blur-md opacity-75 animate-pulse"></div>
            <div class="relative flex items-center gap-2 bg-[#12121a]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5048e5]/30">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span class="text-xs font-semibold tracking-wider uppercase text-[#6b64e8]">
                Available for new opportunities
              </span>
            </div>
          </div>

          <div class="space-y-4">
            <h1 class="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              <span class="block">Building digital</span>
              <span class="block gradient-text">experiences</span>
              <span class="block">with <span class="text-[#5048e5] relative">
                precision
                <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5048e5] to-[#6b64e8] rounded-full"></span>
              </span></span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
              Front-End Developer specializing in Solid-js, JavaScript, Tailwind and modern CSS to create performant, accessible web applications that users love.
            </p>
          </div>

          <div class="flex flex-wrap gap-4">
            <a class="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5048e5] to-[#6b64e8] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#5048e5]/40 overflow-hidden" href="#projects">
              <span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span class="relative flex items-center gap-2">
                View My Work
                <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </a>
            
            <a class="relative group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all overflow-hidden" href="#contact">
              <span class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors rounded-xl border border-slate-200/10"></span>
              <span class="relative flex items-center gap-2">
                <span class="material-symbols-outlined text-[#5048e5]">chat</span>
                Let's Talk
              </span>
            </a>
          </div>

          <div class="flex items-center gap-8 pt-4">
            <div class="flex items-center gap-3 group">
              <div class="size-10 rounded-lg bg-[#5048e5]/10 flex items-center justify-center text-[#5048e5] group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-xl">rocket_launch</span>
              </div>
              <div>
                <span class="block text-2xl font-black">7+</span>
                <span class="text-xs text-slate-500">Projects Launched</span>
              </div>
            </div>
            
            <div class="w-px h-12 bg-slate-700"></div>
            
            <div class="flex items-center gap-3 group">
              <div class="size-10 rounded-lg bg-[#5048e5]/10 flex items-center justify-center text-[#5048e5] group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-xl">emoji_events</span>
              </div>
              <div>
                <span class="block text-2xl font-black">100%</span>
                <span class="text-xs text-slate-500">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <span class="text-sm text-slate-500">Tech Stack:</span>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-bold rounded-full border border-[#5048e5]/20 hover:bg-[#5048e5]/20 transition-colors cursor-default">Solid-js</span>
              <span class="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-bold rounded-full border border-[#5048e5]/20 hover:bg-[#5048e5]/20 transition-colors cursor-default">Javascript</span>
              <span class="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-bold rounded-full border border-[#5048e5]/20 hover:bg-[#5048e5]/20 transition-colors cursor-default">Git</span>
              <span class="px-3 py-1 bg-[#5048e5]/10 text-[#5048e5] text-xs font-bold rounded-full border border-[#5048e5]/20 hover:bg-[#5048e5]/20 transition-colors cursor-default">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Right Content - Code Window */}
        <div class="relative  hidden lg:block">
          <div class="relative z-10 animate-float">
            <div class="code-window rounded-2xl overflow-hidden shadow-2xl">
              <div class="bg-[#1a1a24] px-5 py-3 flex items-center gap-2 border-b border-[#5048e5]/20">
                <div class="flex gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div class="flex-1 text-center">
                  <span class="text-xs text-slate-500">portfolio.jsx</span>
                </div>
              </div>
              <div class="p-14 bg-[#0e0e17]">
                <pre class="text-xs font-mono text-slate-300 leading-relaxed">
                  <span class="text-pink-400">const</span> <span class="text-green-400">Developer</span> <span class="text-slate-300">=</span> {"{"}<span class="block ml-4">
                    <span class="text-blue-400">name</span>: <span class="text-yellow-400">'Gasser Zayed'</span>,</span><span class="block ml-4">
                    <span class="text-blue-400">role</span>: <span class="text-yellow-400">'Front-End Developer'</span>,</span><span class="block ml-4">
                    <span class="text-blue-400">skills</span>: [<span class="text-yellow-400">'Solid'</span>, <span class="text-yellow-400">'JS'</span>, <span class="text-yellow-400">'Tailwind'</span>],</span><span class="block ml-4">
                    <span class="text-blue-400">passion</span>: <span class="text-yellow-400">'Building awesome UIs'</span>,</span><span class="block ml-4">
                    <span class="text-blue-400">available</span>: <span class="text-green-400">true</span></span>
                  {"}"};
                </pre>
              </div>
            </div>

            {/* Floating Cards */}
            <div class="absolute -top-8 -right-8 z-20 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse-slow" style="animation-delay: 0.5s;">
              <div class="size-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center text-yellow-500">
                <span class="material-symbols-outlined">speed</span>
              </div>
              <div>
                <p class="text-xs text-slate-400 uppercase font-bold tracking-widest">Performance</p>
                <p class="text-xl font-black text-white">98</p>
                <p class="text-[10px] text-slate-500">Lighthouse score</p>
              </div>
            </div>

            <div class="absolute -bottom-8 -left-8 z-20 glass-card p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse-slow" style="animation-delay: 1s;">
              <div class="size-10 rounded-lg bg-gradient-to-br from-[#5048e5]/20 to-[#6b64e8]/20 flex items-center justify-center text-[#5048e5]">
                <span class="material-symbols-outlined">favorite</span>
              </div>
              <div>
                <p class="text-xs text-slate-400 uppercase font-bold tracking-widest">Satisfaction</p>
                <p class="text-xl font-black text-white">100%</p>
                <p class="text-[10px] text-slate-500">Client reviews</p>
              </div>
            </div>

            <div class="absolute top-1/2 -right-12 z-20 glass-card p-3 rounded-full shadow-xl animate-pulse-slow" style="animation-delay: 1.5s;">
              <div class="flex items-center gap-2">
                <div class="size-8 rounded-full bg-[#5048e5]/20 flex items-center justify-center text-[#5048e5]">
                  <span class="material-symbols-outlined text-sm">workspace_premium</span>
                </div>
                <span class="font-bold text-sm pr-2">2+ Years</span>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 -z-10 bg-gradient-to-r from-[#5048e5]/30 to-transparent rounded-full blur-[100px] opacity-50"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex">
  <span class="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
  <div class="w-5 h-8 border-2 border-[#5048e5]/30 rounded-full flex justify-center">
    <div class="w-1 h-2 bg-[#5048e5] rounded-full mt-2 animate-bounce"></div>
  </div>
</div>
    </section>
  );
}

export default Hero;