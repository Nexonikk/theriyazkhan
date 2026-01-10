'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Linkedin, Download, Award, Phone, Rocket, ShieldCheck, GitBranch, TrendingUp, Users, Compass, Crown, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };




  const experience = [
    {
      role: 'Manager',
      company: 'PhysicsWallah',
      period: 'Nov 2022 - Oct 2025',
      location: 'Remote',
      achievements: [
        'Built high-performing sales pods generating MRR of ₹1.5 Cr+ (~$170K)',
        'Automated lead-allotment workflows (CRM), reducing lead-to-contact from 120→5 minutes',
        'Trained and mentored 250+ BDAs, Mentors, TLs, and Managers',
        'Scaled Kota POD from Zero-to-n, establishing it as a high-revenue vertical',
        'Drove ~27% YoY revenue growth through process excellence',
        'Increased MQL→SQL conversion by 100%'
      ]
    },
    {
      role: 'Sales Manager',
      company: 'Scaler by InterviewBit',
      period: 'Apr 2021 - Nov 2022',
      location: 'Remote',
      achievements: [
        'Managed and scaled sales pods generating ₹13L+ monthly revenue per associate',
        'Improved overall revenue by 15% through accurate forecasting',
        'Designed sales training bootcamps reducing ramp-up time',
        'Improved MQL→SQL conversion and forecasting accuracy',
        'Collaborated with Product, Finance & Operations on dashboards'
      ]
    },
    {
      role: 'Senior Sales Trainer',
      company: 'Relevel by Unacademy',
      period: 'Dec 2019 - Mar 2021',
      location: 'Remote',
      achievements: [
        'Trained 1000+ learners achieving 80% placement success rate',
        'Maintained 4.8+ NPS across learner cohorts',
        'Built CRM-integrated referral and alumni feedback funnels',
        'Conducted live sales cohorts (80+ learners per batch)'
      ]
    },
    {
      role: 'Business Development Manager',
      company: 'Vedantu Innovations',
      period: 'Sep 2018 - Nov 2019',
      location: 'Remote',
      achievements: [
        'Led JEE/NEET-focused sales teams; ranked 3rd PAN India in revenue',
        'Drove 150% increase in monthly revenue via referral campaigns',
        'Managed team of 25+ Senior Academic Counselors',
        'Implemented CRM-based sales dashboards'
      ]
    }
  ];


  const projects = [
    {
      title: 'Market Research',
      description: 'Comprehensive analysis of EdTech trends and competitor strategies to identify underexploited market segments.',
      metrics: 'Identified $50M+ TAM opportunity',
      tags: ['Strategy', 'Analysis'],
      link: 'https://drive.google.com/drive/folders/16dexE1UotkgoZ7cV0ZTHvYwPxepKg57f?usp=sharing'
    },
    {
      title: 'Sales Playbook',
      description: 'Developed and implemented a standardized sales playbook for a 50+ member team, reducing ramp-up time by 40%.',
      metrics: '35% Increase in Win Rate',
      tags: ['Process', 'Enablement'],
      link: 'https://docs.google.com/document/d/1l07lOW9kXs5ucuil3AutyHMKFrZlDwZ_OvCbSFeqRNA/edit?usp=sharing'
    }
  ];

  const tools = [
    { name: 'Sales Navigator', image: '/sales_navigator.png' },
    { name: 'Lusha', image: '/lusha.jpeg' },
    { name: 'Apollo.io', image: '/appolo.png' },
    { name: 'ZoomInfo', image: '/zoominfo.png' },
    { name: 'HubSpot', image: '/hubspot.jpg' },
    { name: 'LeadSquared', image: '/leadsquare.webp' },
    { name: 'Clay', image: '/clay.webp' },
    { name: 'Hunter.io', image: '/hunter.png' },
    { name: 'Skrapp.io', image: '/scarp.jpg' },
    { name: 'Crunchbase', image: '/crunchbase.avif' },
    { name: 'Builtwith', image: '/builtwith.webp' },
    { name: 'Canva', image: '/canva.jpg' },
  ];

  const marqueeItems = [
    { text: "Go-to-Market Strategy", icon: Rocket, color: "text-blue-600" },
    { text: "Objection Handling & Negotiation", icon: ShieldCheck, color: "text-green-600" },
    { text: "Pipeline Generation & Management", icon: GitBranch, color: "text-purple-600" },
    { text: "Forecasting & Funnel Analytics", icon: TrendingUp, color: "text-orange-600" },
    { text: "Multi Stakeholder Management", icon: Users, color: "text-indigo-600" },
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
        className="fixed top-0 w-full bg-[#FDFCF0]/80 backdrop-blur-md z-50 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {/* RAK removed */}
          </motion.div>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Experience', 'Projects','Certifications', 'Tools', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-black">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[100px] animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>
        </div>

        <div className="max-w-7xl w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-blue-900/30 border border-blue-800 text-blue-300 rounded-full text-sm font-semibold inline-block backdrop-blur-sm">
                9+ Years of Sales Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 leading-tight text-white"
            >
              Riyaz Ahmed Khan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-400 mb-6"
            >
              <span className="font-semibold text-blue-400">Revenue-First Sales Leader</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed"
            >
              I build and scale predictable revenue engines. From building sales pods generating ₹1.5Cr+ MRR to automating processes that cut lead-to-contact time by 96%, I deliver measurable outcomes. Let&apos;s talk about revenue growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700 text-white border-none"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12"
            >
              <div className="flex flex-col items-start gap-4">
                 <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Trusted by leading EdTech & SaaS companies</p>
                 <div className="h-px w-86 bg-blue-500/50"></div>
                 <div className="flex gap-2 text-left">
                    {['PhysicsWallah', 'Scaler', 'Vedantu', 'Unacademy'].map((company) => (
                      <span key={company} className="text-gray-400 font-semibold hover:text-white transition-colors">
                        {company}
                      </span>
                    ))}
                 </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/riyaz.png"
                    alt="Riyaz Ahmed Khan"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
             </div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-200"
            >
              What I Do
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div variants={fadeInUp} className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I&apos;m a revenue-first seller who builds and converts pipelines end-to-end. I combine repeatable outbound playbooks with data-backed qualification and a consultative approach to drive measurable ARR growth.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  As a manager, I&apos;ve scaled sales pods generating ₹1.5Cr+ monthly revenue, coached sellers to hit quota, trained 250+ team members, and run senior hiring panels. I can both close deals and plug into GTM motions from day one.
                </p>
                <div className="pt-4 space-y-3">
                  {[
                    "9+ years in B2B SaaS & EdTech",
                    "250+ mentored team members",
                    "Built teams from zero to $170K+ MRR"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              >
                 <video
                   className="w-full max-w-sm h-auto rounded-2xl mx-auto" // Added max-w-sm to reduce size
                   controls
                 >
                   <source src="/intro_video.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skilled In Section - Full Width */}
      <section ref={containerRef} className="w-full bg-[#FDFCF0] py-24 relative overflow-hidden text-black block">
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
                        desc: "Understanding the industry, trends, and competition to identify the best opportunities and tailor strategies to reach potential customers." 
                     },
                     { 
                        title: "Buyer Persona", 
                        desc: "Creating a detailed profile of your ideal customer, including their needs, goals, and challenges, to craft messages that resonate with them." 
                     },
                     { 
                        title: "Lead/Account Qualification", 
                        desc: "Evaluating potential leads or accounts to ensure they meet specific criteria like budget, authority, need, and timing before pursuing them." 
                     },
                     { 
                        title: "Lead Generation", 
                        desc: "Finding potential customers who are likely to be interested in your product or service through different channels like emails, LinkedIn, social media, or ads." 
                     },
                     { 
                        title: "Lead Generation Tools", 
                        desc: "Using platforms like Lusha or LinkedIn Sales Navigator to find, verify, and organize contact details of prospects effectively." 
                     },
                     { 
                        title: "Outreach, Follow-up & Sequence", 
                        desc: "A planned series of emails, calls, or messages sent at regular intervals to keep prospects engaged and move them closer to a sale." 
                     },
                  ].map((skill, index) => (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                     >
                        {/* Dot */}
                        <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#FDFCF0] z-10 shadow-sm" />
                        
                        {/* Content */}
                        <div className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] ml-12 md:ml-0 p-8 bg-white rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                           <h4 className="text-xl font-bold mb-3 text-slate-900">{skill.title}</h4>
                           <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Marquee Section - Full Width */}
      <div className="w-full overflow-hidden relative border-y border-gray-200 bg-[#FDFCF0] py-12">
          <div className="max-w-[100vw]"> {/* Prevent horizontal scroll issues */}
             <div className="flex animate-marquee whitespace-nowrap gap-16 items-center" style={{ animationDuration: '7s' }}>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-16">
                     {marqueeItems.map((item, index) => (
                         <div key={index} className="flex items-center gap-4 text-slate-900 hover:text-blue-600 transition-colors cursor-default">
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
      <section id="experience" className="relative py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            >
              Experience
            </motion.h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  className="border-l-4 border-blue-600 pl-8 py-6 bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-lg text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right p-3">
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-blue-500 font-bold mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
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
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900"
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
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
                                 className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-sm text-gray-300 transition-colors"
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

      {/* Certificates Section */}
      <section id="certifications" className="relative py-20 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
           <motion.div
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             variants={staggerContainer}
           >
             <motion.h2
               variants={fadeInUp}
               className="text-4xl md:text-5xl font-bold mb-16 text-center text-white flex items-center justify-center gap-4"
             >
               <Award className="w-10 h-10 text-yellow-500" />
               Certifications
             </motion.h2>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                   <motion.div
                     key={num}
                     variants={fadeInUp}
                     whileHover={{ scale: 1.05 }}
                     className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-gray-900 shadow-xl group"
                   >
                      <Image
                        src={`/certificate${num}.jpeg`}
                        alt={`Certificate ${num}`}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                   </motion.div>
                ))}
             </div>
           </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-32 px-6 bg-[#FDFCF0] border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4 text-center text-slate-900"
            >
              Tools & Technologies
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-600 text-center mb-12 max-w-2xl mx-auto"
            >
              I&apos;m proficient with modern sales and CRM tools that drive efficiency and results
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
                  <span className="font-semibold text-slate-700 group-hover:text-blue-600 text-sm md:text-base">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden bg-gradient-to-r from-black via-sky-500 to-black animate-gradient-xy">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            whileInView={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px]"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Let&apos;s Build Something Great
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-4"
            >
              Ready to drive predictable revenue and scale your sales organization?
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 mb-12"
            >
              Let&apos;s connect and explore how I can help you achieve your growth targets.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="border border-gray-800 rounded-2xl p-8 mb-12 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <a href="mailto:khanriyaz.160621@gmail.com" className="text-white font-semibold hover:text-blue-500 transition-colors">
                      khanriyaz.160621@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Whatsapp / Call</p>
                    <a href="https://wa.me/+918052254321" className="text-white font-semibold hover:text-blue-500 transition-colors">
                      +91 8052254321
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white border-none">
                <Mail className="mr-2 w-5 h-5" />
                 <a href="mailto:khanriyaz.160621@gmail.com" >
                Send Email
                    </a>
              </Button>
              <Button size="lg" variant="outline" className="group border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white border-2">
                <Linkedin className="mr-2 w-5 h-5" />
                <a href="https://www.linkedin.com/in/the-riyaz-khan/" target="_blank" rel="noopener noreferrer">
                  Visit LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white border-2">
                <Download className="mr-2 w-5 h-5" />
                <a href="https://drive.google.com/file/d/1TbWPdfxIzZLnJ7NFd15Snrm7wl9GpfKG/view">
                Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
