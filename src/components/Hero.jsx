import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Available for freelance & collabs
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Hey, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300">your next favorite dev</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            I craft playful, performant web experiences blending 3D, motion, and clean code. Let’s build something unforgettable.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.25)] transition"
            >
              Explore projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-medium text-white hover:opacity-90 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
    </section>
  );
}
