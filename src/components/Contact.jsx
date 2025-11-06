import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-white/60">Let’s talk</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-white/70">Have an idea, brief, or vibe? Drop it below.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <textarea name="message" required placeholder="Message" rows={5} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium text-white hover:opacity-90 transition">
            Send message
            <Send className="h-4 w-4" />
          </button>
          {status && <p className="text-emerald-400 text-sm">{status}</p>}
        </form>
      </div>

      <footer className="mt-20 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Your Name. Built with love and caffeine.
      </footer>
    </section>
  );
}
