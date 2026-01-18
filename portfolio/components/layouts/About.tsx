//  <section id="about" className="relative py-20 px-6 bg-black">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-200"
//             >
//               What I Do
//             </motion.h2>
//             <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//               <motion.div variants={fadeInUp} className="space-y-6">
//                 <p className="text-lg text-slate-300 leading-relaxed">
//                   I&apos;m a revenue-first seller who builds and converts
//                   pipelines end-to-end. I combine repeatable outbound playbooks
//                   with data-backed qualification and a consultative approach to
//                   drive measurable ARR growth.
//                 </p>
//                 <p className="text-lg text-slate-300 leading-relaxed">
//                   As a manager, I&apos;ve scaled sales pods generating ₹1.5Cr+
//                   monthly revenue, coached sellers to hit quota, trained 250+
//                   team members, and run senior hiring panels. I can both close
//                   deals and plug into GTM motions from day one.
//                 </p>
//                 <div className="pt-4 space-y-3">
//                   {[
//                     "9+ years in B2B SaaS & EdTech",
//                     "250+ mentored team members",
//                     "Built teams from zero to $170K+ MRR",
//                   ].map((item, i) => (
//                     <div key={i} className="flex items-center gap-3">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                       <span className="text-slate-300">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={fadeInUp}
//                 className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
//               >
//                 <video
//                   className="w-full max-w-sm h-auto rounded-2xl mx-auto" // Added max-w-sm to reduce size
//                   controls
//                 >
//                   <source src="/intro_video.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>