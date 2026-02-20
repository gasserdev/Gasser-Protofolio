function Footer() {
  return (
    <footer class="py-12 px-6 border-t border-slate-200/10 bg-[#12121a]/30">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm">
        <div class="flex items-center gap-2">
          <div class="size-6 bg-gradient-to-br from-[#5048e5] to-[#6b64e8] rounded flex items-center justify-center text-white">
            <span class="material-symbols-outlined text-sm">code</span>
          </div>
          <p>© 2026 Gasser Zayed. Built with Solid & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;