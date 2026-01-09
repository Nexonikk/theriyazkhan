'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, Download, Briefcase, Target, TrendingUp, Users, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
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


  const skills = [
    { name: 'Lead Generation', icon: Target },
    { name: 'Sales Leadership', icon: Users },
    { name: 'Revenue Growth', icon: BarChart3 },
    { name: 'CRM & Automation', icon: Zap },
    { name: 'Team Scaling', icon: TrendingUp },
    { name: 'Business Development', icon: Briefcase }
  ];

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
      title: 'Lead Automation System',
      description: 'Designed workflow automation reducing lead-to-contact time from 120 minutes to 5 minutes through CRM optimization',
      metrics: '24x faster lead allocation',
      tags: ['CRM', 'Automation', 'Process']
    },
    {
      title: 'Sales Pod Scaling',
      description: 'Built and scaled multiple high-performing sales pods from zero revenue to consistent $170K+ monthly revenue',
      metrics: '₹1.5 Cr+ MRR per pod',
      tags: ['Team Building', 'Scaling', 'Revenue']
    },
    {
      title: 'Conversion Optimization',
      description: 'Implemented qualification frameworks and process changes that doubled MQL to SQL conversion rates',
      metrics: '100% conversion increase',
      tags: ['Strategy', 'Analytics', 'Process']
    },
    {
      title: 'Team Training Program',
      description: 'Designed comprehensive sales training bootcamps for 250+ team members with 80%+ placement success',
      metrics: '4.8+ NPS, 250+ trained',
      tags: ['Training', 'Leadership', 'Development']
    }
  ];

  const tools = [
    'Sales Navigator', 'Lusha', 'Apollo.io', 'ZoomInfo', 'HubSpot',
    'LeadSquared', 'Clay', 'Hunter.io', 'Skrapp.io', 'Crunchbase',
    'Builtwith', 'ChatGPT', 'Canva', 'Mr.E by Easyleadz'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-900 bg-clip-text text-transparent"
          >
            RAK
          </motion.div>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Experience', 'Projects', 'Tools', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 10 }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-slate-400 rounded-full filter blur-3xl"
          />
        </div>

        <div className="max-w-6xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold inline-block">
                9+ Years of Sales Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 leading-tight"
            >
              Riyaz Ahmed Khan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-700 mb-6"
            >
              <span className="font-semibold">Revenue-First Sales Leader</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              I build and scale predictable revenue engines. From building sales pods generating ₹1.5Cr+ MRR to automating processes that cut lead-to-contact time by 96%, I deliver measurable outcomes. Let&apos;s talk about revenue growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                size="lg"
                className="group bg-blue-600 hover:bg-blue-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 pt-12 border-t border-gray-200"
            >
              <p className="text-gray-600 text-sm mb-6">Trusted by leading EdTech & SaaS companies</p>
              <div className="flex justify-center gap-8 flex-wrap">
                {['PhysicsWallah', 'Scaler', 'Vedantu', 'Unacademy'].map((company) => (
                  <motion.div
                    key={company}
                    whileHover={{ y: -5 }}
                    className="text-gray-400 font-semibold"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              What I Do
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 items-start mb-16"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I&apos;m a revenue-first seller who builds and converts pipelines end-to-end. I combine repeatable outbound playbooks with data-backed qualification and a consultative approach to drive measurable ARR growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a manager, I&apos;ve scaled sales pods generating ₹1.5Cr+ monthly revenue, coached sellers to hit quota, trained 250+ team members, and run senior hiring panels. I can both close deals and plug into GTM motions from day one.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">9+ years in B2B SaaS & EdTech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">250+ mentored team members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">Built teams from zero to $170K+ MRR</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-200 transition-colors"
                  >
                    <skill.icon className="w-8 h-8 mb-4 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Experience
            </motion.h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  className="border-l-4 border-blue-600 pl-8 py-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-700 flex items-start gap-3"
                      >
                        <span className="text-blue-600 font-bold mt-1">▸</span>
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
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Key Projects & Wins
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-gray-200 hover:border-blue-300">
                    <CardContent className="p-8">
                      <div className="mb-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {project.tags[0]}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                        {project.metrics}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-200 hover:bg-blue-200 rounded-full text-sm text-gray-700 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-32 px-6 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              Tools & Technologies
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            >
              I&apos;m proficient with modern sales and CRM tools that drive efficiency and results
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-300 transition-all text-center"
                >
                  <span className="font-semibold text-gray-900">{tool}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            whileInView={{ opacity: 0.05, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"
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
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let&apos;s Build Something Great
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-4"
            >
              Ready to drive predictable revenue and scale your sales organization?
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 mb-12"
            >
              Let&apos;s connect and explore how I can help you achieve your growth targets.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-2xl p-8 mb-12 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email</p>
                    <a href="mailto:khanriyaz.160621@gmail.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                      khanriyaz.160621@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-sm text-gray-600 font-medium flex-shrink-0 w-6">Phone</span>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Whatsapp / Call</p>
                    <a href="https://wa.me/+918052254321" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
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
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </Button>
              <Button size="lg" variant="outline" className="group hover:bg-blue-50">
                <Linkedin className="mr-2 w-5 h-5" />
                <a href="https://www.linkedin.com/in/the-riyaz-khan/" target="_blank" rel="noopener noreferrer">
                  Visit LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group hover:bg-blue-50">
                <Download  />
                <a className="mr-2 w-5 h-5" href='https://drive.google.com/file/d/1TbWPdfxIzZLnJ7NFd15Snrm7wl9GpfKG/view'>
                Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Riyaz Ahmed Khan</h3>
              <p className="text-sm text-gray-600">Revenue-First Sales Leader | Building Predictable Revenue Engines</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:khanriyaz.160621@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">Email</a></li>
                <li><a href="tel:+918052254321" className="text-gray-600 hover:text-blue-600 transition-colors">Phone</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>© 2025 Riyaz Ahmed Khan. All rights reserved. | Revenue-First Sales Leadership</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
