"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Download,

  Phone,
  Rocket,
  ShieldCheck,
  GitBranch,
  TrendingUp,
  Users,
  Compass,
  Crown,
  PieChart,
  Menu,
  X,
  Target,
  Zap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { experience, projects, tools } from "@/lib/data";
import Calendly from "@/components/layouts/Calendly";

export default function Home() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heroItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const marqueeItems = [
    { text: "Go-to-Market Strategy", icon: Rocket, color: "text-blue-600" },
    {
      text: "Objection Handling & Negotiation",
      icon: ShieldCheck,
      color: "text-green-600",
    },
    {
      text: "Pipeline Generation & Management",
      icon: GitBranch,
      color: "text-purple-600",
    },
    {
      text: "Forecasting & Funnel Analytics",
      icon: TrendingUp,
      color: "text-orange-600",
    },
    {
      text: "Multi Stakeholder Management",
      icon: Users,
      color: "text-indigo-600",
    },
    { text: "Strategic Planning", icon: Compass, color: "text-red-600" },
    { text: "Team Leadership", icon: Crown, color: "text-yellow-600" },
    { text: "ROI articulation", icon: PieChart, color: "text-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-slate-900 selection:bg-blue-500/30 overflow-hidden">
      <div className="fixed inset-0 bg-[#FDFCF0] pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-[#FDFCF0]/80 backdrop-blur-md z-50 border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {[
              "Home",
              "About",
              "Experience",
              "Projects",
              "Certifications",
              "Tools",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FDFCF0] border-b border-blue-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {[
                  "Home",
                  "About",
                  "Experience",
                  "Projects",
                  "Certifications",
                  "Tools",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-semibold text-slate-700 hover:text-blue-600"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }, 100);
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[95vh] flex items-center justify-center px-6 pt-24 overflow-hidden bg-[#FDFCF0]"
      >
        {/* Floating Animated Background Spheres */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[140px] opacity-50"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={heroItem} className="mb-6">
              <span className="px-5 py-2 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm font-bold inline-block shadow-sm">
                9+ Years of Sales Leadership
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-none text-slate-900 tracking-tight"
            >
              Riyaz Ahmed Khan
            </motion.h1>

            <motion.div variants={heroItem} className="mb-8">
              <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Revenue-First Sales Leader - GTM
              </p>
            </motion.div>

            <motion.p
              variants={heroItem}
              className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium"
            >
              I build and scale predictable revenue engines. From building sales
              pods generating ₹1.5Cr+ MRR to automating processes that cut
              lead-to-contact time by 96%, I deliver measurable outcomes.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex gap-6 flex-wrap justify-start mb-16"
            >
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 shadow-xl hover:shadow-blue-200 transition-all font-bold"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-slate-700 hover:bg-blue-50 bg-white rounded-full px-8 shadow-md font-bold"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Wins
              </Button>
            </motion.div>

            <motion.div variants={heroItem} className="w-full max-w-4xl">
              <div className="flex flex-col items-start gap-6">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  Trusted by
                </p>
                <span className="h-px w-24 bg-zinc-800"></span>
                <div className="flex flex-wrap justify-start gap-x-4 gap-y-5">
                  {["PhysicsWallah", "Scaler", "Vedantu", "Unacademy"].map(
                    (company) => (
                      <span
                        key={company}
                        className="text-slate-400 font-black text-xs md:text-xl  hover:text-blue-600 transition-colors cursor-default tracking-tighter"
                      >
                        {company.toUpperCase()}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-blue-200 m-10 rounded-3xl blur-[40px] opacity-30 animate-pulse" />
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <Image
                  src="/riyaz.png"
                  alt="Riyaz Ahmed Khan"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section Redesign with Summary Restoration */}
      <section id="about" className="relative py-32 px-6 bg-[#FDFCF0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-extrabold mb-24 text-slate-900 tracking-tighter"
            >
              What I Do
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.03 }}
                  className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
                >
                  {/* Text Split Animation */}
                  {Array.from("I'm a revenue-first seller who builds and converts pipelines end-to-end.").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0.1, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.02 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="space-y-12">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-2xl text-slate-600 leading-relaxed font-bold border-l-8 border-blue-600 pl-8"
                  >
                    I combine repeatable outbound playbooks with data-backed
                    qualification and a consultative approach to drive
                    measurable ARR growth.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-2xl text-slate-600 leading-relaxed font-bold"
                  >
                    As a manager, I&apos;ve scaled sales pods generating ₹1.5Cr+
                    monthly revenue, coached sellers to hit quota, trained 250+
                    team members, and run senior hiring panels.
                  </motion.p>
                </div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden"
              >
                <video
                  className="w-full max-w-md h-auto rounded-2xl mx-auto" 
                  controls
                  playsInline
                >
                  <source src="/intro_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Pipeline Mastery",
                  desc: "Building end-to-end sales engines that convert.",
                },
                {
                  icon: TrendingUp,
                  title: "Revenue Scaling",
                  desc: "Generating ₹1.5Cr+ MRR through process excellence.",
                },
                {
                  icon: Users,
                  title: "Team Leadership",
                  desc: "Training and mentoring 250+ high-performing sellers.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-12 bg-white rounded-[2.5rem] flex flex-col gap-8 shadow-sm hover:shadow-2xl transition-all border border-slate-100"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-bold">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skilled In Section - Full Width */}
      <section
        ref={containerRef}
        className="w-full bg-[#FDFCF0] py-24 relative overflow-hidden text-black block"
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-20 text-center"
          >
            I&rsquo;m Skilled In
          </motion.h3>

          <div className="relative">
            {/* Animated Timeline Line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:translate-x-0">
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute top-0 left-0 w-full h-full bg-blue-600"
              />
            </div>

            <div className="space-y-20">
              {[
                {
                  title: "Market Research",
                  desc: "Understanding the industry, trends, and competition to identify the best opportunities and tailor strategies to reach potential customers.",
                },
                {
                  title: "Buyer Persona",
                  desc: "Creating a detailed profile of your ideal customer, including their needs, goals, and challenges, to craft messages that resonate with them.",
                },
                {
                  title: "Lead/Account Qualification",
                  desc: "Evaluating potential leads or accounts to ensure they meet specific criteria like budget, authority, need, and timing before pursuing them.",
                },
                {
                  title: "Lead Generation",
                  desc: "Finding potential customers who are likely to be interested in your product or service through different channels like emails, LinkedIn, social media, or ads.",
                },
                {
                  title: "Lead Generation Tools",
                  desc: "Using platforms like Lusha or LinkedIn Sales Navigator to find, verify, and organize contact details of prospects effectively.",
                },
                {
                  title: "Outreach, Follow-up & Sequence",
                  desc: "A planned series of emails, calls, or messages sent at regular intervals to keep prospects engaged and move them closer to a sale.",
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#FDFCF0] z-10 shadow-sm" />

                  {/* Content */}
                  <div
                    className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 p-8 bg-white rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <h4 className="text-xl font-bold mb-3 text-slate-900">
                      {skill.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section - Full Width */}
      <div className="w-full overflow-hidden relative border-y border-gray-200 bg-[#FDFCF0] py-12">
        <div className="max-w-[100vw]">
          {" "}
          {/* Prevent horizontal scroll issues */}
          <div
            className="flex animate-marquee whitespace-nowrap gap-16 items-center"
            style={{ animationDuration: "7s" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-16">
                {marqueeItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-slate-900 hover:text-blue-600 transition-colors cursor-default"
                  >
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                    <span className="text-2xl font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-[#FDFCF0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-baseline mb-24">
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-none select-none"
              >
                Experience
              </motion.h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, borderColor: "#2563eb" }}
                  className="p-10 bg-white border border-slate-200 rounded-[2.5rem] flex flex-col md:flex-row gap-12 group transition-all shadow-md hover:shadow-xl"
                >
                  <div className="md:w-1/3">
                    <div className="text-blue-600 font-black text-sm uppercase tracking-widest mb-4">
                      {exp.period}
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                       {exp.company}
                    </h3>
                    <p className="text-lg font-bold text-slate-400 italic">
                      {exp.role}
                    </p>
                  </div>
                  
                  <div className="md:w-2/3 grid gap-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-4">
                        <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-lg font-bold text-slate-600 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-[#FDFCF0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-slate-900"
            >
              Key Projects & Wins
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-white border-gray-100 hover:border-blue-500/50">
                      <CardContent className="p-8">
                        <div className="mb-4 inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-100">
                          {project.tags[0]}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {project.metrics}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black border border-blue-100 shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="relative py-24 px-6 bg-[#FDFCF0] border-t border-blue-100"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-black mb-16 text-center text-slate-900 flex items-center justify-center gap-4"
            >
              <Award className="w-12 h-12 text-blue-600" />
              Certifications
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <motion.div
                  key={num}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl group cursor-zoom-in"
                >
                  <Image
                    src={`/certificate${num}.jpeg`}
                    alt={`Certificate ${num}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        id="tools"
        className="relative py-32 px-6 bg-[#FDFCF0] border-t border-blue-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-black mb-4 text-center text-slate-900"
            >
              Tools & Technologies
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
            >
              I&apos;m proficient with modern sales and CRM tools that drive
              efficiency and results
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-blue-100 hover:border-blue-500 transition-all flex items-center gap-4 group"
                >
                  {tool.image ? (
                    <div className="flex-shrink-0 relative w-10 h-10">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xs border border-blue-100">
                      {tool.name.charAt(0)}
                    </div>
                  )}
                  <span className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm md:text-base">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 px-6 overflow-hidden bg-[#FDFCF0]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [-100, 100, -100],
              y: [-100, 100, -100],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[140px] opacity-40"
          />
          <motion.div
            animate={{
              x: [100, -100, 100],
              y: [100, -100, 100],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[140px] opacity-30"
          />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-slate-50/30 to-indigo-50/30 bg-[length:200%_200%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF0] via-transparent to-[#FDFCF0]" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight"
            >
              Let&apos;s Build Something Great
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-600 mb-12 font-bold max-w-3xl mx-auto"
            >
              Schedule a quick call to explore how we can unlock predictable
              revenue growth for your business.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Calendly />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 flex items-center gap-6 group hover:border-blue-500 transition-all"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">
                    Direct Email
                  </p>
                  <a
                    href="mailto:khanriyaz.160621@gmail.com"
                    className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    khanriyaz.160621@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 flex items-center gap-6 group hover:border-green-500 transition-all"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">
                    WhatsApp / Call
                  </p>
                  <a
                    href="https://wa.me/+918052254321"
                    className="text-xl font-black text-slate-900 hover:text-green-600 transition-colors"
                  >
                    +91 8052254321
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex gap-6 justify-center flex-wrap"
            >
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 shadow-xl hover:shadow-blue-200 transition-all font-black"
                asChild
              >
                <a href="mailto:khanriyaz.160621@gmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-slate-700 hover:bg-blue-50 bg-white rounded-full px-8 shadow-md font-bold"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/the-riyaz-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-slate-700 hover:bg-blue-50 bg-white rounded-full px-8 shadow-md font-bold"
                asChild
              >
                <a href="https://drive.google.com/file/d/1TbWPdfxIzZLnJ7NFd15Snrm7wl9GpfKG/view">
                  <Download className="mr-2 w-5 h-5" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-12 px-6 bg-[#FDFCF0] border-t border-blue-100 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold">
            © {new Date().getFullYear()} RIYAZ AHMED KHAN. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/the-riyaz-khan" className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-sm tracking-widest">LinkedIn</a>
            <a href="mailto:khanriyaz.160621@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors font-bold uppercase text-sm tracking-widest">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
