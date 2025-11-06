import { motion } from 'framer-motion';
import { ExternalLink, Code2, Palette, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    tag: 'Ecommerce',
    desc: 'Headless storefront with blazing-fast UX and micro-animations.',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
    icon: Code2,
    gradient: 'from-fuchsia-500/20 to-cyan-400/20',
  },
  {
    title: 'Vibe UI Kit',
    tag: 'Design System',
    desc: 'Shadcn-based component library with Gen Z gradients + motion.',
    tech: ['React', 'Radix', 'Framer Motion'],
    link: '#',
    icon: Palette,
    gradient: 'from-indigo-500/20 to-violet-400/20',
  },
  {
    title: 'Pulse Mobile',
    tag: 'Mobile App',
    desc: 'Wellness app with real-time insights and social sharing.',
    tech: ['Expo', 'Supabase', 'Reanimated'],
    link: '#',
    icon: Smartphone,
    gradient: 'from-cyan-400/20 to-emerald-400/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-white/60">Selected work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white">
            Get in touch <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">{p.tag}</span>
                  <p.icon className="h-5 w-5 text-white/80" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs text-white/70 bg-white/5 border border-white/10 rounded-md px-2 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
