// import { useParams } from "react-router-dom";
// import { blogs } from "../../lib/Blogs";
// import { motion } from "framer-motion";

// import Banner from "../../assets/images/lab (1).jpg"
// import Banner1 from "../../assets/blogs/Banner1.jpg"
// export default function BlogDetails() {
//   const { id } = useParams();
//   const blog = blogs[id];

//   const sections = blog.content.split("\n\n");

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//  <section className="bg-gray-50 min-h-screen  font-poppins hide-scrollbar over">
  
//         <div className="relative">
//           <img
//             src={Banner}
//             className="h-96 w-full object-cover"
//           />
//           <div className=" bg-black opacity-40 inset-0 absolute"></div>
//           {/* Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="show"
//               className="text-3xl md:text-5xl font-bold text-white text-center px-4"
//             >
//               {blog.title}
//             </motion.h1>
//           </div>
//         </div>

//       <div className=" mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
//         <div className=" px-50 w-full  flex h-125 justify-center">
//           <img src={Banner1} className="  w-full   bg-gray-500 rounded-4xl "/>
//         </div>       
//       </div>
//         <div className="h-1 w-full opacity-65 bg-red-700 mb-8 rounded-full"></div>
//         <div className=" flex justify-center text-justify">
//         <div className="space-y-6 max-w-5xl">
//                                 <div className=" text-3xl font-bold py-2 underline ">{blog.title}</div>

//         <div className=" text-xl bg-red-800/20 p-8 rounded-3xl">

//                 <div className=" text-2xl font-bold py-2">Introduction</div>

//         {blog.Introduction}</div>
//           {sections.map((section, index) => {
            
//             const isHeading = section.match(/^\d+\./);
//             const isMainHeading =
//               section === "Introduction" || section === "Conclusion";

//             return (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className={`
//                   ${
//                     isMainHeading
//                       ? "text-2xl font-semibold text-gray-900 mt-10"
//                       : ""
//                   }
//                   ${
//                     isHeading
//                       ? "text-lg font-semibold text-red-800 mt-8 border-l-4 border-red-700 pl-4"
//                       : "text-gray-700 leading-relaxed text-[20px]"
//                   }
//                 `}
//               >
//                 {section}
//               </motion.div>
//             );
//           })}
            
//             <div className=" text-xl bg-red-700/20 p-8 rounded-3xl mb-10">
//                             <div className=" text-xl font-bold py-2">Conslusion</div>

// {blog.Conclusion}</div>
//         </div>
//         </div>
//     </section>
//   );
// }

import { useParams, Link,useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { blogs } from "../../lib/Blogs";


import Banner from "../../assets/images/lab (1).jpg";
import Banner1 from "../../assets/blogs/Banner1.jpg";

/* ─── Google Fonts ─────────────────────────────────────────────────────────────
   index.html:
   <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />

   tailwind.config.js:
   fontFamily: {
     syne: ['Syne', 'sans-serif'],
     lora: ['Lora', 'serif'],
     mono: ['"DM Mono"', 'monospace'],
   }
──────────────────────────────────────────────────────────────────────────────── */

/* ─── Animation variants ────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const lineGrow = {
  hidden: { scaleX: 0, originX: "left" },
  show: { scaleX: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Scroll-reveal wrapper ─────────────────────────────────────────────────── */
function Reveal({ children, variants = fadeUp, custom = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? "show" : "hidden"} custom={custom} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Reading progress bar ──────────────────────────────────────────────────── */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-red-700 z-50 origin-left"
    />
  );
}

/* ─── Section label ─────────────────────────────────────────────────────────── */
function SectionLabel({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="flex items-center gap-3 mb-6">
      <motion.div variants={lineGrow} initial="hidden" animate={inView ? "show" : "hidden"}
        className="h-[2px] w-12 bg-red-800 origin-left shrink-0" />
      <span className="font-mono text-xs tracking-[0.22em] uppercase text-red-700 whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

/* ─── Parse content sections ────────────────────────────────────────────────── */
function parseSection(text) {
  if (/^\d+\./.test(text)) return "heading";
  if (text.length < 120 && text === text.toUpperCase()) return "subheading";
  return "body";
}

/* ─── Main component ────────────────────────────────────────────────────────── */
export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs[id];
  const [readTime, setReadTime] = useState(0);

  const {pathname} = useLocation()
  // console.log(pathname);
  
  useEffect(() => {
    if (blog) {
      const words = (blog.content + " " + blog.Introduction + " " + blog.Conclusion)
        .split(/\s+/).length;
      setReadTime(Math.ceil(words / 200));
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0e0d0d] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="font-mono text-red-700 text-sm tracking-[0.2em] uppercase">404</p>
          <h1 className="font-syne text-stone-100 text-5xl font-extrabold tracking-tight">
            Blog not found
          </h1>
          <Link to="/blogs" className="inline-block font-mono text-base text-red-500 hover:underline">
            ← Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  const sections = blog.content.split("\n\n").filter(Boolean);

  return (
    <div className="bg-[#0e0d0d] min-h-screen text-stone-100 font-lora">
      <ReadingProgress />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative h-[65vh] min-h-[460px] max-h-[720px] overflow-hidden">

        {/* BG image */}
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Banner})`, filter: "brightness(0.18) grayscale(0.3)" }} />

        {/* Red tint */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(140deg, rgba(100,10,10,0.4) 0%, transparent 55%)" }} />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#0e0d0d]" />

        {/* Grain */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")` }} />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end
                        max-w-5xl mx-auto px-6 md:px-12 pb-16 md:pb-20">

          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 mb-5">
            <Link to="/blogs"
              className="font-mono text-xs tracking-widest uppercase text-stone-600
                         hover:text-red-500 transition-colors no-underline">
              Blogs
            </Link>
            <span className="text-stone-700 text-xs">›</span>
            <span className="font-mono text-xs tracking-widest uppercase text-red-700">
              Article
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="font-syne font-extrabold text-stone-50 tracking-tight leading-[1.05]
                       text-[clamp(2rem,5vw,3.8rem)] max-w-4xl mb-8">
            {blog.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6">
            {blog.category && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                               bg-red-900/40 border border-red-800/50
                               font-mono text-xs tracking-widest uppercase text-red-400">
                {blog.category}
              </span>
            )}
            {blog.date && (
              <span className="font-mono text-xs text-stone-600 tracking-wide">{blog.date}</span>
            )}
            <span className="font-mono text-xs text-stone-600 tracking-wide">
              {readTime} min read
            </span>
            {blog.author && (
              <span className="font-mono text-xs text-stone-600 tracking-wide">
                By <span className="text-stone-400">{blog.author}</span>
              </span>
            )}
          </motion.div>
        </div>

        {/* Red sweep border */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #991b1b 30%, #dc2626 50%, #991b1b 70%, transparent)" }} />
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          FEATURE IMAGE — warm charcoal zone
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#111110]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
          <Reveal variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] } } }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-stone-900 group">
              <img src={Banner1} alt={blog.title}
                className="w-full h-full object-cover grayscale-[15%] contrast-105
                           transition-transform duration-700 group-hover:scale-[1.03]" />
              {/* Red corner accents */}
              <span className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-800 pointer-events-none rounded-tl-2xl" />
              <span className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-800 pointer-events-none rounded-br-2xl" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          INTRODUCTION — dark slate bg
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#0f1117]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Introduction</SectionLabel>

          <Reveal variants={fadeUp} custom={0}>
            <div className="relative rounded-2xl overflow-hidden bg-red-950/20 border border-red-900/25 p-8 md:p-12">
              {/* Ambient glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(153,27,27,0.12) 0%, transparent 70%)" }} />
              <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl"
                style={{ background: "linear-gradient(to bottom, #991b1b, #450a0a, transparent)" }} />

              <p className="font-lora text-xl md:text-2xl leading-[1.95] text-stone-300 italic">
                {blog.Introduction}
              </p>
            </div>
          </Reveal>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          MAIN CONTENT — near-black warm bg
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#0e0d0d]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Article</SectionLabel>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const type = parseSection(section);

              if (type === "heading") {
                return (
                  <Reveal key={index} variants={fadeLeft}>
                    <div className="flex items-start gap-5 pt-6">
                      <div className="flex flex-col items-center shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-700 shrink-0" />
                        <div className="w-[1px] flex-1 bg-red-900/30 mt-2 min-h-[2rem]" />
                      </div>
                      <h3 className="font-syne font-bold text-xl md:text-2xl text-stone-100
                                     tracking-tight leading-snug">
                        {section}
                      </h3>
                    </div>
                  </Reveal>
                );
              }

              if (type === "subheading") {
                return (
                  <Reveal key={index} variants={fadeUp}>
                    <h4 className="font-syne font-bold text-lg text-red-500 tracking-wide uppercase
                                   border-b border-red-900/30 pb-2">
                      {section}
                    </h4>
                  </Reveal>
                );
              }

              // Every ~4th paragraph becomes a highlighted pull-quote for visual rhythm
              if (index % 5 === 2 && section.length > 80) {
                return (
                  <Reveal key={index} variants={fadeUp} custom={1}>
                    <blockquote className="relative rounded-2xl bg-[#111110] border border-red-900/20
                                           px-8 md:px-12 py-8 my-4">
                      <div className="absolute top-4 left-4 font-syne font-black text-[5rem]
                                       text-red-900/20 leading-none select-none pointer-events-none">
                        "
                      </div>
                      <p className="font-lora italic text-xl text-stone-300 leading-[1.95] relative z-10">
                        {section}
                      </p>
                    </blockquote>
                  </Reveal>
                );
              }

              return (
                <Reveal key={index} variants={fadeUp} custom={index % 4 * 0.05}>
                  <p className="font-lora text-lg md:text-xl leading-[1.95] text-stone-400">
                    {section}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          CONCLUSION — deep reddish-warm bg
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#130e0e]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">
          <SectionLabel>Conclusion</SectionLabel>

          <Reveal variants={fadeUp}>
            <div className="relative rounded-2xl overflow-hidden bg-black/20
                            border border-red-900/30 p-8 md:p-12">
              {/* Left bar */}
              <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl"
                style={{ background: "linear-gradient(to bottom, #991b1b, #450a0a, transparent)" }} />
              {/* Corner glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(153,27,27,0.1) 0%, transparent 70%)" }} />

              <p className="font-lora italic text-xl md:text-2xl leading-[1.95] text-stone-300">
                {blog.Conclusion}
              </p>
            </div>
          </Reveal>


          {/* ── Tags ── */}
          {blog.tags && blog.tags.length > 0 && (
            <Reveal variants={fadeUp} custom={1} className="mt-14">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="font-mono text-xs tracking-widest uppercase text-stone-700 mr-2">
                  Tags:
                </span>
                {blog.tags.map((tag, i) => (
                  <motion.span key={i}
                    whileHover={{ scale: 1.05, borderColor: "#991b1b" }}
                    className="px-4 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase
                               bg-stone-900 border border-stone-800 text-stone-500
                               cursor-default transition-colors duration-200">
                    {tag}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          )}


          {/* ── Back to blogs CTA ── */}
          <Reveal variants={fadeUp} custom={2} className="mt-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center
                            justify-between gap-6 pt-10 border-t border-white/[0.05]">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-stone-700 mb-1">
                  Continue reading
                </p>
                <p className="font-syne font-bold text-xl text-stone-300">
                  Explore more from Maeon Labs
                </p>
              </div>
              <motion.a 
              onClick={()=>{
               window.scrollTo({
                  top: 0,
                  behavior: "smooth", 
                });
              }}
              
                whileHover={{ scale: 1.02, backgroundColor: "#991b1b", color: "#fff0f0", borderColor: "#991b1b" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-3.5
                           border-2 border-red-800 text-red-500
                           font-syne font-bold text-sm tracking-[0.1em] uppercase
                           rounded-xl no-underline transition-all duration-200 shrink-0">
                ← Return to Top 
              </motion.a>
            </div>
          </Reveal>


          {/* ── Footer note ── */}
          <Reveal variants={fadeUp} custom={3}>
            <div className="mt-14 pt-8 border-t border-white/[0.04]
                            flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-stone-800">
                Maeon Laboratories · Chennai, India
              </p>
              <p className="font-mono text-xs tracking-[0.12em] text-stone-800">
                NABL Accredited · ISO/IEC 17025
              </p>
            </div>
          </Reveal>

        </div>
      </div>

    </div>
  );
}