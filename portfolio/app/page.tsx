"use client";

import { motion, useScroll, useSpring, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect} from "react";
import {
  Mail, Linkedin, Download, Phone,
  Rocket, ShieldCheck, GitBranch, TrendingUp,
  Users, Compass, Crown, PieChart,
  Menu, X, ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { experience, projects, tools } from "@/lib/data";
import Calendly from "@/components/layouts/Calendly";

/* ─── CONSTANTS ─── */
const PURPLE = "rgb(203 172 249)";
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
};
const stagger = { animate: { transition: { staggerChildren: 0.09 } } };

/* ─── SPOTLIGHT HERO COMPONENT ─── */
function HeroSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <div 
        className="pointer-events-none absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      >
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 60%)", filter: "blur(40px)" }} />
      </div>
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 transition duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: number[]) =>
              `radial-gradient(500px circle at ${x}px ${y}px, rgba(139,92,246,0.08), transparent 70%)`
          ),
        }}
      />
    </>
  );
}

/* ─── GLOW BORDER CARD ─── */
function GlowCard({
  children, className = "",
}: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, show: false });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top, show: true });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, show: false }))}
      className={`relative group ${className}`}
    >
      {/* Glow border */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: pos.show
            ? `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.5), transparent 70%)`
            : "transparent",
        }}
      />
      {/* Inner mask */}
      <div className="relative z-10 rounded-[inherit] bg-[#09090f] transition-colors group-hover:bg-[rgba(139,92,246,0.02)] h-full overflow-hidden">
        {/* Subtle inner hover gradient */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
          style={{
            background: pos.show 
              ? `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.06), transparent 70%)` 
              : "transparent"
          }}
        />
        <div className="relative h-full z-10">{children}</div>
      </div>
    </div>
  );
}

/* ─── ANIMATED BADGE ─── */
function PurpleBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
      style={{
        color: PURPLE,
        borderColor: "rgba(139,92,246,0.3)",
        background: "rgba(139,92,246,0.08)",
      }}
    >
      {children}
    </span>
  );
}

/* ─── FLOATING PARTICLES ─── */
function Particles() {
  const [particles] = useState(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  })));

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "rgba(203,172,249,0.4)",
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
export default function Home() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navLinks = ["Home", "About", "Experience", "Projects", "Certifications", "Tools", "Contact"];

  const marqueeItems = [
    { text: "Go-to-Market Strategy", icon: Rocket },
    { text: "Objection Handling & Negotiation", icon: ShieldCheck },
    { text: "Pipeline Generation & Management", icon: GitBranch },
    { text: "Forecasting & Funnel Analytics", icon: TrendingUp },
    { text: "Multi Stakeholder Management", icon: Users },
    { text: "Strategic Planning", icon: Compass },
    { text: "Team Leadership", icon: Crown },
    { text: "ROI Articulation", icon: PieChart },
  ];

  return (
    <div className="min-h-screen bg-[#09090f] text-white overflow-x-hidden">
      <HeroSpotlight />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] z-[100] origin-left"
        style={{
          scaleX: useSpring(useScroll().scrollYProgress, { stiffness: 200, damping: 30 }),
          background: "linear-gradient(90deg, rgba(139,92,246,0.8), rgba(203,172,249,0.6))",
        }}
      />

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.06]"
        style={{ background: "rgba(9,9,15,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: PURPLE }}
          >
            RK
          </motion.span>

          <div className="hidden md:flex gap-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm text-white/40 hover:text-white/80 transition-colors relative group">
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
                  style={{ background: PURPLE }} />
              </a>
            ))}
          </div>

          <button className="md:hidden text-white/40" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/[0.06] overflow-hidden"
              style={{ background: "rgba(9,9,15,0.95)" }}>
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}>{item}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section id="home" className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
        <Particles />

        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

        {/* Hero spotlight — static center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)", filter: "blur(1px)" }} />

        {/* Horizontal glow line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.25) 30%, rgba(203,172,249,0.3) 50%, rgba(139,92,246,0.25) 70%, transparent)" }} />

        <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <motion.div initial="initial" animate="animate" variants={stagger} className="flex flex-col">

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                GTM · Revenue Operations · Sales · B2B SaaS
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} transition={{ duration: 0.55, delay: 0.02 }}
              className="text-[1.3rem] sm:text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight mb-8">
              <span className="block whitespace-nowrap">Revenue, process, and GTM —</span>
              <span
                className="block italic font-bold whitespace-nowrap mt-1 lg:mt-2"
                style={{
                  color: PURPLE,
                  textShadow: "0 0 40px rgba(139,92,246,0.3)",
                }}
              >
                I work at the intersection of all three.
              </span>
            </motion.h1>

            <motion.h2 variants={fadeUp} transition={{ duration: 0.55, delay: 0.05 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
              Riyaz Khan
            </motion.h2>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.08 }} className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  color: "rgba(74, 222, 128, 1)",
                  borderColor: "rgba(74, 222, 128, 0.2)",
                  background: "rgba(74, 222, 128, 0.05)",
                }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Remote Opportunities
              </span>
            </motion.div>

            <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-base font-medium text-slate-300 mb-5">
              GTM Operations · Revenue Operations · Full-Cycle Sales · Outbound Systems · B2B SaaS
            </motion.p>
            <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="text-sm md:text-base text-slate-400 leading-relaxed mb-10 max-w-lg">
              9+ years designing the infrastructure that revenue teams run on — from lead routing and CRM automation to full-cycle sales and GTM execution. Open to operator, individual contributor, and revenue-focused roles.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                <Mail className="w-4 h-4" />
                Let&apos;s Connect
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/1580nlakVXDvAhr8030Kx5jGzUgWAENKZ/view"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-200 border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(0,0,0,0.2)" }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Experience at */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.25 }}>
              <p className="text-[10px] text-white/80 uppercase tracking-widest mb-4 font-semibold">Experience at</p>
              <div className="flex flex-wrap gap-4">
                {["PhysicsWallah", "Scaler", "Vedantu", "Unacademy"].map((c, i) => (
                  <div key={c} className="relative group overflow-hidden rounded-lg">
                    {/* Spinning line */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "conic-gradient(from 0deg, transparent 70%, rgba(139,92,246,0.8) 100%)",
                      }}
                    />
                    {/* Inner content covering the spinning line, creating a border */}
                    <div className="relative z-10 m-[1px] px-4 py-2 bg-[#0c0c14] rounded-[7px] flex items-center justify-center transition-colors group-hover:bg-[#11111a]">
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white tracking-wide">{c}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right — image normal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-[340px] xl:max-w-[420px] h-[450px] xl:h-[550px] rounded-[2rem] overflow-hidden">
              <Image src="/riyaz.png" alt="Riyaz Ahmed Khan" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>About</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-5xl font-black text-white mt-4 mb-16 tracking-tight">
              Where Revenue Meets Systems
            </motion.h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start mb-20">
              <div className="flex-1 space-y-6">
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                  Revenue operations professional with 9+ years scaling sales teams and designing process infrastructure in high-growth tech. Built revenue pods generating $170K+ MRR, redesigned lead allocation cutting response time by 96%, and trained 250+ sales professionals across distributed teams.
                </motion.p>
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                  Strong experience in full-cycle sales including discovery, demo, objection handling, and deal closing across high-volume pipelines. Hands-on with modern B2B SaaS GTM tools including Clay, Apollo, HubSpot, and outbound infrastructure.
                </motion.p>
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
                  Equally effective as an individual contributor running full sales cycles or as an operator building the systems behind revenue teams.
                </motion.p>

                <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-3 pt-4">
                  {["🌐 Remote-First · 6+ Years", "⚙️ Process-Obsessed", "🔧 Tools-Curious"].map((b) => (
                    <span key={b} className="px-4 py-1.5 text-xs font-bold text-slate-200 border border-white/10 rounded-full bg-white/[0.03] shadow-sm">{b}</span>
                  ))}
                </motion.div>

                {/* Impact Metrics - Relocated */}
                <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.06] pt-8">
                  {[
                    { label: "YoY Growth", value: "27%+" },
                    { label: "MRR Gen.", value: "$170K+" },
                    { label: "Lead Lift", value: "2x" },
                    { label: "Pros Trained", value: "250+" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl font-bold text-white tracking-tight">{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="mt-4 text-[11px] text-slate-400 font-medium tracking-wide italic">
                  9+ Years in Tech Sales · 200+ Hiring Interviews · 40+ GTM Tools Mapped · 96% Lead Allocation Speed Improvement
                </motion.p>
              </div>

              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}
                className="w-full max-w-[320px] md:max-w-[380px] lg:w-[400px] shrink-0 rounded-2xl overflow-hidden border border-white/10 relative shadow-[0_0_80px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }} />
                <video className="w-full h-auto object-cover" controls playsInline>
                  <source src="/intro_video.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>

            {/* 3 GlowCards */}
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { id: "01", title: "GTM Systems", desc: "ICP workflows, signal-based targeting, outbound sequences and email infrastructure for B2B SaaS pipeline generation.", tags: ["Clay", "Apollo", "ICP", "Outbound"] },
                { id: "02", title: "Revenue Operations", desc: "Lead routing, CRM automation, qualification frameworks and pipeline reporting that make revenue predictable.", tags: ["HubSpot", "RevOps", "Forecasting"] },
                { id: "03", title: "Full-Cycle Sales", desc: "Discovery to close with BANT/CHAMP/MEDDIC, consultative selling, objection handling and post-sale retention.", tags: ["Pipeline", "MEDDIC", "Closing"] },
              ].map((item, i) => (
                <GlowCard key={i} className="rounded-2xl border border-white/[0.08] bg-white/[0.01]">
                  <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="p-8">
                    <div className="text-[11px] font-mono mb-5" style={{ color: PURPLE }}>{item.id}</div>
                    <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                       {item.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[10px] font-semibold rounded-md"
                          style={{ color: PURPLE, borderColor: "rgba(139,92,246,0.3)", border: "1px solid", background: "rgba(139,92,246,0.08)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ PHILOSOPHY ══════════════════ */}
      <section id="philosophy" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Philosophy</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-14 tracking-tight">How I Think About GTM</motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { quote: "The allocation system is the pipeline. Fix the routing before you fix the pitch.", author: "On process design" },
                { quote: "120 minutes to 5. That's what redesigning a system looks like — not working faster.", author: "On operational improvement" },
                { quote: "The best reps I've trained weren't the loudest. They were the most structured.", author: "On coaching philosophy" },
                { quote: "Signal-based outreach isn't a hack. It's what happens when you stop guessing.", author: "On modern GTM" },
                { quote: "Revenue predictability comes from system design, not motivation.", author: "On RevOps thinking" },
                { quote: "Remote doesn't mean disconnected. Six years proved process beats proximity.", author: "On remote work" },
              ].map((item, i) => (
                <GlowCard key={i} className="rounded-xl border border-white/[0.06]">
                  <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="p-6">
                    <div className="text-3xl font-serif mb-3" style={{ color: "rgba(118, 97, 166, 1)" }}>&ldquo;</div>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">{item.quote}</p>
                    <p className="text-[10px] font-medium" style={{ color: "rgba(168, 132, 222, 1)" }}>— {item.author}</p>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ SKILLS TIMELINE ══════════════════ */}
      <section ref={containerRef} className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Expertise</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-16 tracking-tight">I&rsquo;m Skilled In</motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[1px]"
              style={{ background: "rgba(139,92,246,0.12)" }}>
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{ scaleY, transformOrigin: "top", background: "linear-gradient(180deg, rgba(203,172,249,0.7), rgba(139,92,246,0.3))" }}
              />
            </div>

            <div className="space-y-14">
              {[
                { title: "Market Research", desc: "Understanding industry trends and competition to identify the best opportunities and tailor strategies to reach potential customers." },
                { title: "Buyer Persona", desc: "Creating detailed profiles of ideal customers including needs, goals, and challenges to craft messages that resonate." },
                { title: "Lead / Account Qualification", desc: "Evaluating leads against BANT/MEDDIC criteria — budget, authority, need, and timing — before pursuing them." },
                { title: "Lead Generation", desc: "Finding potential customers through emails, LinkedIn, social media and outbound channels." },
                { title: "Lead Generation Tools", desc: "Using Lusha, LinkedIn Sales Navigator and Clay to find, verify and organize prospect contact details." },
                { title: "Outreach, Follow-up & Sequence", desc: "Planned multi-touch cadences across email, calls and messages to move prospects toward a decision." },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Glow dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#09090f] z-10"
                    style={{ background: PURPLE, boxShadow: "0 0 10px rgba(139,92,246,0.8)" }} />
                  <GlowCard className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 rounded-xl border border-white/[0.06] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="p-5">
                      <h4 className="text-sm font-semibold text-white mb-1.5">{skill.title}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{skill.desc}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div className="py-8 border-y border-white/[0.06] overflow-hidden"
        style={{ background: "linear-gradient(90deg, rgba(139,92,246,0.03), rgba(139,92,246,0.06) 50%, rgba(139,92,246,0.03))" }}>
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center" style={{ animationDuration: "22s" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 transition-colors"
                  style={{ color: "rgba(175, 141, 226, 0.84)" }}>
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <section id="experience" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Career</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-14 tracking-tight">Career Timeline</motion.h2>

            <div className="space-y-3">
              {experience.map((exp, index) => (
                <GlowCard key={index} className="rounded-xl border border-white/[0.06]">
                  <motion.div variants={fadeUp} transition={{ duration: 0.4 }}
                    className="p-7 flex flex-col md:flex-row gap-8 group">
                    <div className="md:w-1/3 shrink-0">
                      <div className="text-[10px] font-mono mb-2 tracking-wide" style={{ color: "rgba(203, 172, 249, 0.99)" }}>{exp.period}</div>
                      <h3 className="text-sm font-semibold text-white/80 mb-1">{exp.company}</h3>
                      <p className="text-xs text-white/70 italic">{exp.role}</p>
                    </div>
                    <div className="md:w-2/3 space-y-2.5">
                      {exp.achievements.map((a, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: PURPLE, opacity: 0.8 }} />
                          <p className="text-xs text-white/70 leading-relaxed">{a}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ PROJECTS ══════════════════ */}
      <section id="projects" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Work</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-14 tracking-tight">Key Projects &amp; Wins</motion.h2>

            <div className="grid md:grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <GlowCard key={index} className="rounded-xl border border-white/[0.06]">
                  {project.link ? (
                    <motion.a
                      href={project.link} target="_blank" rel="noopener noreferrer"
                      variants={fadeUp} transition={{ duration: 0.4 }}
                      className="p-7 block group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-[10px] font-mono" style={{ color: "rgba(203, 172, 249, 0.99)" }}>{project.tags[0]}</span>
                        <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                      <p className="text-xs font-semibold mb-3" style={{ color: "rgba(203, 172, 249, 0.99)" }}>{project.metrics}</p>
                      <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[9px] rounded"
                            style={{ color: "rgba(203, 172, 249, 0.9)", border: "1px solid rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.1)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      variants={fadeUp} transition={{ duration: 0.4 }}
                      className="p-7 block group cursor-default"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-[10px] font-mono" style={{ color: "rgba(203, 172, 249, 0.99)" }}>{project.tags[0]}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 transition-colors">{project.title}</h3>
                      <p className="text-xs font-semibold mb-3" style={{ color: "rgba(203, 172, 249, 0.99)" }}>{project.metrics}</p>
                      <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[9px] rounded"
                            style={{ color: "rgba(203, 172, 249, 0.9)", border: "1px solid rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.1)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ CERTIFICATIONS ══════════════════ */}
      <section id="certifications" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Credentials</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-14 tracking-tight">Certifications</motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <GlowCard key={num} className="rounded-xl border border-white/[0.06]">
                  <motion.div variants={fadeUp} transition={{ duration: 0.4 }}
                    className="relative aspect-[4/3] overflow-hidden rounded-[10px] group cursor-zoom-in">
                    <Image src={`/certificate${num}.jpeg`} alt={`Certificate ${num}`} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                  </motion.div>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ TOOLS ══════════════════ */}
      <section id="tools" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-2">
              <PurpleBadge>Stack</PurpleBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 tracking-tight">Tools &amp; Technologies</motion.h2>
            <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="text-sm text-white/70 mb-12">
              Proficient with modern sales and GTM tools that drive efficiency and results.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tools.map((tool) => (
                <GlowCard key={tool.name} className="rounded-xl border border-white/[0.08]">
                  <motion.div variants={fadeUp} transition={{ duration: 0.35 }}
                    className="flex items-center gap-3 p-3 group">
                    {tool.image ? (
                      <div className="relative w-6 h-6 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                        <Image src={tool.image} alt={tool.name} fill className="object-contain" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded flex items-center justify-center font-bold text-[9px] shrink-0"
                        style={{ color: "rgba(203,172,249,0.5)", border: "1px solid rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.08)" }}>
                        {tool.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-xs text-white/35 group-hover:text-white/60 transition-colors">{tool.name}</span>
                  </motion.div>
                </GlowCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger}>

            {/* CTA hero block */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] p-12 md:p-20 text-center mb-10">
              {/* Grid bg */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }} />
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />

              <div className="relative z-10">
                <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mb-4 flex justify-center">
                  <PurpleBadge>Get in touch</PurpleBadge>
                </motion.div>
                <motion.h2 variants={fadeUp} transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Let&apos;s Build Something Great
                </motion.h2>
                <motion.p variants={fadeUp} transition={{ duration: 0.5 }}
                  className="text-sm text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
                  Schedule a quick call to explore how we can unlock predictable revenue growth for your business.
                </motion.p>
                <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                  <Calendly />
                </motion.div>
              </div>
            </div>

            {/* Contact links */}
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                { icon: Mail, label: "Direct Email", value: "khanriyaz.160621@gmail.com", href: "mailto:khanriyaz.160621@gmail.com" },
                { icon: Phone, label: "WhatsApp / Call", value: "+91 8052254321", href: "https://wa.me/+918052254321" },
              ].map((item, i) => (
                <GlowCard key={i} className="rounded-xl border border-white/[0.06]">
                  <motion.a href={item.href} variants={fadeUp} transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 p-5 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.4)" }}>
                      <item.icon className="w-4 h-4" style={{ color: PURPLE }} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 mb-0.5">{item.label}</p>
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">{item.value}</span>
                    </div>
                  </motion.a>
                </GlowCard>
              ))}
            </div>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex gap-3 flex-wrap">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="mailto:khanriyaz.160621@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-black"
                style={{ background: PURPLE }}>
                <Mail className="w-3.5 h-3.5" />
                Email Me
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="https://www.linkedin.com/in/the-riyaz-khan/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 border transition-all hover:text-white"
                style={{ borderColor: "rgba(139,92,246,0.4)", background: "rgba(139,92,246,0.15)" }}>
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/file/d/1580nlakVXDvAhr8030Kx5jGzUgWAENKZ/view" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 border transition-all hover:text-white"
                style={{ borderColor: "rgba(139,92,246,0.4)", background: "rgba(139,92,246,0.15)" }}>
                <Download className="w-3.5 h-3.5" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Riyaz Ahmed Khan. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/the-riyaz-khan"
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href="mailto:khanriyaz.160621@gmail.com"
              className="text-xs font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest">Email</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee { animation: marquee linear infinite; will-change: transform; }
      `}</style>
    </div>
  );
}