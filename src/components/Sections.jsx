import { motion } from 'framer-motion';
import { Cpu, Radar, Map, Navigation, Wifi, ShieldCheck, ScanLine, ScanFace, Clock3, KeyRound, MoveRight, Bot, Send, Settings2, Radio, Cpu as Cpu2, Boxes, SquareStack } from 'lucide-react';

export default function Sections() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold">About the Project</h2>
            <p className="text-slate-300 leading-relaxed">
              Built for a smart campus, our autonomous robot delivers food across the college using AI, LIDAR-based mapping, and autonomous navigation. Operating entirely on the campus Wi‑Fi network, it navigates between mapped locations like department HOD rooms, cafeterias, and labs, and identifies delivery points from pre‑mapped coordinates.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Wifi, title: 'Campus Wi‑Fi', desc: 'Operates fully on local network' },
                { icon: ShieldCheck, title: 'Safe & Contactless', desc: 'Obstacle-aware delivery' },
                { icon: Map, title: 'Mapped Locations', desc: 'Predefined POIs across campus' },
                { icon: Navigation, title: 'Autonomous', desc: 'Human pace path following' },
              ].map((i, idx) => (
                <div key={idx} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <i.icon className="h-5 w-5 text-cyan-300" />
                  <h4 className="mt-3 font-semibold">{i.title}</h4>
                  <p className="text-sm text-slate-400">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-400/10 p-6">
            <div className="aspect-video rounded-lg bg-slate-900/60 border border-white/10 grid place-items-center text-slate-300">
              Campus delivery zones visual — CSE HOD, Mechanical Dept, Cafeteria, Labs
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Bot, title: 'Place Order', desc: 'User selects items and destination in the local web app' },
            { icon: Radar, title: 'Robot Receives', desc: 'Order arrives to robot over Wi‑Fi via MQTT' },
            { icon: Map, title: 'Plan Route', desc: 'SLAM + LIDAR + encoders plan obstacle‑aware path' },
            { icon: MoveRight, title: 'Autonomous Drive', desc: 'Robot navigates safely to deliver food' },
          ].map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <s.icon className="h-6 w-6 text-cyan-300" />
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="text-sm text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section id="tech" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Technology Used</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-4 text-cyan-300">Hardware</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, label: 'Raspberry Pi' },
                { icon: Settings2, label: 'Arduino' },
                { icon: Radar, label: 'LIDAR' },
                { icon: SquareStack, label: 'Encoders' },
                { icon: ScanLine, label: 'IMU' },
                { icon: Radio, label: 'Ultrasonic Sensors' },
              ].map((t, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-900/50 p-3">
                  <t.icon className="h-5 w-5 text-emerald-300" />
                  <span className="text-slate-200">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold mb-4 text-cyan-300">Software</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Boxes, label: 'ROS' },
                { icon: Map, label: 'SLAM' },
                { icon: Navigation, label: 'Path Planning' },
                { icon: Cpu2, label: 'Node.js' },
                { icon: Send, label: 'MQTT' },
              ].map((t, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-900/50 p-3">
                  <t.icon className="h-5 w-5 text-cyan-300" />
                  <span className="text-slate-200">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mapping & Localization */}
      <section id="mapping" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mapping and Localization</h2>
            <p className="text-slate-300 leading-relaxed">
              The robot first roams the campus to build a detailed map using LIDAR and SLAM. Delivery points such as “CSE HOD Room” or “Mechanical Department” are saved as coordinates that the robot can autonomously navigate to later for deliveries.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 p-6">
            <div className="aspect-video rounded-lg bg-slate-900/60 border border-white/10 grid place-items-center text-slate-300">
              SLAM map preview — corridors, nodes, POIs
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Wifi, title: 'Local Wi‑Fi', desc: 'No internet required' },
            { icon: Clock3, title: 'Real-Time Tracking', desc: 'See live robot location' },
            { icon: Radar, title: 'Dynamic Avoidance', desc: 'People & obstacle aware' },
            { icon: KeyRound, title: 'QR Unlocking', desc: 'Smart delivery box' },
            { icon: Navigation, title: 'Autonomous Nav', desc: 'Human walking speed' },
            { icon: ShieldCheck, title: 'Secure', desc: 'Validated drop-off' },
          ].map((f, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <f.icon className="h-6 w-6 text-emerald-300" />
              <h4 className="mt-4 font-semibold">{f.title}</h4>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Dashboard */}
      <section id="demo" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 md:p-8">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-6 items-start">
            {/* Map mock */}
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-cyan-300">Interactive Demo Dashboard</h3>
                <span className="text-xs text-slate-400">Mockup</span>
              </div>
              <div className="mt-4 aspect-video rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.15),transparent_55%)] border border-white/10 overflow-hidden">
                <svg viewBox="0 0 600 300" className="h-full w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#g1)" fill="none" strokeOpacity="0.6">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <path key={i} d={`M0 ${10*i} Q 200 ${15*i+5} 400 ${12*i+8} T 600 ${10*i}`} />
                    ))}
                  </g>
                  {/* POIs */}
                  {[
                    { x: 80, y: 60, label: 'Cafeteria' },
                    { x: 260, y: 90, label: 'CSE HOD' },
                    { x: 480, y: 180, label: 'Mechanical Dept' },
                    { x: 160, y: 220, label: 'Lab Block' },
                  ].map((p, idx) => (
                    <g key={idx}>
                      <circle cx={p.x} cy={p.y} r="6" fill="#22d3ee" />
                      <text x={p.x + 10} y={p.y + 4} fontSize="12" fill="#cbd5e1">{p.label}</text>
                    </g>
                  ))}
                  {/* Robot */}
                  <g>
                    <rect x="300" y="140" width="18" height="12" rx="2" fill="#10b981" />
                    <circle cx="309" cy="152" r="4" fill="#a7f3d0" />
                    <text x="330" y="152" fontSize="12" fill="#cbd5e1">Robot</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Order form */}
            <div className="rounded-xl border border-white/10 bg-slate-900 p-4">
              <h3 className="font-semibold text-cyan-300">Place a Demo Order</h3>
              <form className="mt-4 grid gap-3">
                <div>
                  <label className="text-sm text-slate-400">Your Name</label>
                  <input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Varun Sundar" />
                </div>
                <div>
                  <label className="text-sm text-slate-400">Delivery Point</label>
                  <select className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40">
                    <option>CSE HOD Room</option>
                    <option>Mechanical Department</option>
                    <option>Cafeteria</option>
                    <option>Lab Block</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-slate-400">Items</label>
                  <input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Veg Sandwich, Coffee" />
                </div>
                <button type="button" onClick={() => alert('This is a demo UI.')} className="mt-2 inline-flex justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 px-4 py-2 font-semibold text-slate-900">
                  Submit Demo Order
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-500">Note: This is a non-functional mock to visualize the flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-cyan-300">Developers</h3>
            <p className="text-slate-300 mt-3">Developed by Varun Sundar, Department of Mechanical Engineering</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold text-cyan-300">Mentor</h3>
            <p className="text-slate-300 mt-3">Mentored by [Mentor Name], [Designation]</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-slate-300">Have questions or want to collaborate? Reach out to us.</p>
            <p className="mt-3 text-slate-400">[Your College Name]\n[Department]\n[City, Country]</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <form className="grid gap-3">
              <div>
                <label className="text-sm text-slate-400">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-400">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500" placeholder="Write your message..." />
              </div>
              <button type="button" onClick={() => alert('Thanks! This is a demo form.')} className="mt-2 inline-flex justify-center rounded-md bg-gradient-to-r from-cyan-500 to-emerald-400 px-4 py-2 font-semibold text-slate-900">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-slate-400 text-sm">
          © 2025 Autonomous Food Delivery Robot Project — [Your College Name].
        </div>
      </section>
    </div>
  );
}
