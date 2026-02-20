import { createSignal } from 'solid-js';

function Contact() {
  const [showMessage, setShowMessage] = createSignal(false);
  const [formSubmitted, setFormSubmitted] = createSignal(false);

  const handleIframeLoad = () => {
    if (formSubmitted()) {
      setShowMessage(true);
      setFormSubmitted(false);
      
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    
    setTimeout(() => {
      if (formSubmitted()) {
        setShowMessage(true);
        setFormSubmitted(false);
        setTimeout(() => setShowMessage(false), 5000);
      }
    }, 3000);
  };

  return (
    <section class="py-24 px-6 bg-slate-50 dark:bg-[#12121a]/50" id="contact">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="space-y-8">
            <span class="text-[#5048e5] font-bold text-sm uppercase tracking-widest">Get in touch</span>
            <h2 class="text-4xl font-black tracking-tight">Let's work together</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as I can.
            </p>
            
            <div class="flex items-center gap-4 group">
              <div class="size-12 rounded-full bg-gradient-to-br from-[#5048e5]/10 to-[#5048e5]/5 flex items-center justify-center text-[#5048e5] group-hover:scale-110 transition-all">
                <span class="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase">Email</p>
                <p class="font-bold text-lg">gasserzayed.work0@gmail.com</p>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div class="size-12 rounded-full bg-gradient-to-br from-[#5048e5]/10 to-[#5048e5]/5 flex items-center justify-center text-[#5048e5] group-hover:scale-110 transition-all">
                <span class="material-symbols-outlined">share</span>
              </div>
              <div>
                <p class="text-xs font-bold text-slate-500 uppercase">Socials</p>
                <div class="flex gap-6 mt-2">
                  <a class="text-slate-400 hover:text-[#5048e5] font-medium text-sm transition-all hover:scale-110" href="https://github.com/gasserdev">GitHub</a>
                  <a class="text-slate-400 hover:text-[#5048e5] font-medium text-sm transition-all hover:scale-110" href="https://www.linkedin.com/in/gasserdev/">LinkedIn</a>
                  <a class="text-slate-400 hover:text-[#5048e5] font-medium text-sm transition-all hover:scale-110" href="https://web.facebook.com/gasserdev">Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#f6f6f8] dark:bg-[#12121a] p-8 md:p-10 rounded-3xl border border-slate-200/10 shadow-2xl relative">
            
            {showMessage() && (
              <div class="absolute top-1 left-4 right-4 z-50 bg-green-500 text-white p-4 rounded-xl text-sm flex items-center gap-2 shadow-lg">
                <span class="material-symbols-outlined">check_circle</span>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style="display: none;"
              onLoad={handleIframeLoad}
            ></iframe>

            <form 
              action="https://formspree.io/f/mwvnnwbe" 
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              class="space-y-6"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-widest text-slate-500">Name *</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    class="w-full bg-white/5 border border-slate-200/10 rounded-xl px-4 py-3 focus:border-[#5048e5] outline-none transition-all" 
                    placeholder="John Doe"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-widest text-slate-500">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    class="w-full bg-white/5 border border-slate-200/10 rounded-xl px-4 py-3 focus:border-[#5048e5] outline-none transition-all" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-slate-500">Subject *</label>
                <input 
                  type="text"
                  name="subject"
                  required
                  class="w-full bg-white/5 border border-slate-200/10 rounded-xl px-4 py-3 focus:border-[#5048e5] outline-none transition-all" 
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-widest text-slate-500">Message *</label>
                <textarea 
                  name="message"
                  required
                  class="w-full bg-white/5 border border-slate-200/10 rounded-xl px-4 py-3 focus:border-[#5048e5] outline-none transition-all resize-none" 
                  placeholder="Tell me about your project..."
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full bg-gradient-to-r from-[#5048e5] to-[#6b64e8] hover:from-[#6b64e8] hover:to-[#5048e5] text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;