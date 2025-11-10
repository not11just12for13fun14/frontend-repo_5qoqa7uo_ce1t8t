import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Autonomous Robotics • AI • SLAM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Autonomous Food Delivery Robot
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            AI-Powered Campus Robot for Smart, Contactless Food Delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
              Order Now (Demo)
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10">
              Track Robot
            </a>
          </div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
