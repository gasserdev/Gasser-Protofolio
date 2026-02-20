import { createSignal } from 'solid-js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-[#5048e5]/30 bg-[#12121a]">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div class="flex items-center gap-3 group">
          <div class="size-11 bg-gradient-to-br from-[#5048e5] to-[#6b64e8] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#5048e5]/20 group-hover:scale-110 transition-transform duration-300">
            <span class="material-symbols-outlined text-2xl">code_blocks</span>
          </div>
          <h2 class="text-xl font-bold tracking-tight">
            <span class="gradient-text">Gasser Zayed</span>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav class="hidden md:flex items-center gap-8">
          <a class="text-sm font-medium text-slate-200 hover:text-[#5048e5] transition-all relative group" href="#projects">
            Projects
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5048e5] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a class="text-sm font-medium text-slate-200 hover:text-[#5048e5] transition-all relative group" href="#skills">
            Skills
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5048e5] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a class="text-sm font-medium text-slate-200 hover:text-[#5048e5] transition-all relative group" href="#contact">
            Contact
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5048e5] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="https://github.com/gasserdev" class="bg-gradient-to-r from-[#5048e5] to-[#6b64e8] hover:from-[#6b64e8] hover:to-[#5048e5] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#5048e5]/30">
            Github
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen())}
          class="md:hidden text-slate-200 p-2 hover:bg-[#5048e5]/20 rounded-xl transition-all relative z-50"
          aria-label="Toggle menu"
        >
          <span class="material-symbols-outlined text-2xl">
            {isMenuOpen() ? 'close' : 'menu'}
          </span>
        </button>

         {isMenuOpen() && (
          <div 
            class="fixed inset-0 backdrop-blur-md bg-black/20 md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Mobile Menu Drawer */}
        <div class={`fixed top-0 right-0 h-full  w-72 bg-[#12121a] border-l-2 border-[#5048e5]/40 transform transition-transform duration-300 ease-in-out md:hidden z-40 shadow-2xl ${isMenuOpen() ? 'translate-x-0' : 'translate-x-full'}`}>
          <div class="flex flex-col pt-24 px-8 gap-4">
            <a 
              href="#projects" 
              class="text-base font-medium text-slate-200 hover:text-[#5048e5] hover:bg-[#5048e5]/10 px-4 py-3 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              class="text-base font-medium text-slate-200 hover:text-[#5048e5] hover:bg-[#5048e5]/10 px-4 py-3 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              class="text-base font-medium text-slate-200 hover:text-[#5048e5] hover:bg-[#5048e5]/10 px-4 py-3 rounded-xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div class="border-t border-[#5048e5]/20 my-4"></div>
            <a 
              href="https://github.com/gasserdev" 
              class="bg-gradient-to-r from-[#5048e5] to-[#6b64e8] hover:from-[#6b64e8] hover:to-[#5048e5] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all transform hover:scale-105 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;