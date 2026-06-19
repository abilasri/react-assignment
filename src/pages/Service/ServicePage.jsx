  import { useRef } from "react";
  import { useParams, Link } from "react-router-dom";
  import { motion, useInView } from "framer-motion";
  import { tests } from "../../lib/TestingDetails";

  /* ─── Google Fonts ─────────────────────────────────────────────────────────────
    Add to your index.html <head>:
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />

    tailwind.config.js:
    theme: { extend: { fontFamily: {
      syne: ['Syne', 'sans-serif'],
      lora: ['Lora', 'serif'],
      mono: ['"DM Mono"', 'monospace'],
    }}}
  ──────────────────────────────────────────────────────────────────────────────── */

  /* ─── Section background palette (alternating) ─────────────────────────────── */
  // 0 = near-black warm  1 = dark slate  2 = deep charcoal  3 = very dark red tint
  const SECTION_BGS = [
    "bg-[#111110]",          // warm near-black
    "bg-[#0f1117]",          // cool dark slate
    "bg-[#13100f]",          // dark reddish-warm
    "bg-[#0d0d0d]",          // true near-black
  ];

  /* ─── Animation variants ────────────────────────────────────────────────────── */
  const fadeUp = {
    hidden: { opacity: 0, y: 44 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
    }),
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -44 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const lineGrow = {
    hidden: { scaleX: 0, originX: "left" },
    visible: { scaleX: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  /* ─── Scroll-reveal wrapper ─────────────────────────────────────────────────── */
  function Reveal({ children, variants = fadeUp, custom = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
      <motion.div ref={ref} variants={variants} initial="hidden"
        animate={inView ? "visible" : "hidden"} custom={custom} className={className}>
        {children}
      </motion.div>
    );
  }

  /* ─── Section label with animated rule ─────────────────────────────────────── */
  function SectionLabel({ children, light = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
      <div ref={ref} className="flex items-center gap-3 mb-8">
        <motion.div variants={lineGrow} initial="hidden" animate={inView ? "visible" : "hidden"}
          className={`h-[2px] w-12 origin-left shrink-0 ${light ? "bg-red-400" : "bg-red-800"}`} />
        <span className={`font-mono text-xs tracking-[0.22em] uppercase whitespace-nowrap
                          ${light ? "text-red-400" : "text-red-700"}`}>
          {children}
        </span>
      </div>
    );
  }

  /* ─── Individual test row ───────────────────────────────────────────────────── */
  function TestRow({ test, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-30px" });
    return (
      <motion.div ref={ref} variants={fadeUp} initial="hidden"
        animate={inView ? "visible" : "hidden"} custom={index * 0.06}
        whileHover={{ borderLeftColor: "#991b1b", backgroundColor: "rgba(153,27,27,0.06)" }}
        className="grid grid-cols-[80px_1fr_auto] gap-4 items-center
                  px-5 py-4 border-b border-white/5
                  border-l-2 border-l-transparent transition-colors  font-poppins duration-200 cursor-default">

        <span className="font-mono text-xs text-red-700/80 leading-none">{test.code}</span>

        <div className="min-w-0 font-poppins">
          <p className="font-poppins font-semibold text-base text-stone-100 leading-snug">{test.test}</p>
          {test.standards && (
            <p className="font-mono text-xs text-stone-600 mt-0.5 tracking-wide leading-snug">
              {test.standards}
            </p>
          )}
        </div>

        <span className="shrink-0 inline-block px-3 py-1 rounded-sm font-mono text-xs
                        tracking-[0.08em] uppercase bg-red-900/30 text-red-400
                        border border-red-800/40">
          {test.category}
        </span>
      </motion.div>
    );
  }

  /* ─── Section card ──────────────────────────────────────────────────────────── */
  function SectionCard({ section, idx }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = idx % 2 === 0;
    const bgClass = SECTION_BGS[idx % SECTION_BGS.length];

    return (
      <section ref={ref} id={`section-${idx}`}
        className={`scroll-mt-10 ${bgClass} rounded-xl mb-6 overflow-hidden`}>

        {/* Inner padding */}
        <div className="px-8 md:px-14 py-14">

          {/* Heading */}
          <Reveal variants={fadeLeft} className="mb-10">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-red-800/60 w-7 shrink-0 tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <motion.div variants={lineGrow} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="h-[2px] w-10 bg-red-800 origin-left shrink-0" />
              <h2 className="font-poppins font-extrabold text-stone-100 text-2xl md:text-3xl
                            tracking-tight leading-none">
                {section.name}
              </h2>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <Reveal variants={scaleIn} className={isEven ? "lg:order-1" : "lg:order-2"}>
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-stone-900 group">
                <img src={section.image} alt={section.name}
                  className="w-full h-full object-cover grayscale-[20%] contrast-105
                            transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
                {/* Red corner accents */}
                <span className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-800 pointer-events-none rounded-tl-lg" />
                <span className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-800 pointer-events-none rounded-br-lg" />
                {/* Red overlay shimmer on hover */}
                <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500" />
                {/* Watermark number */}
                <span className="absolute bottom-3 left-5 font-poppins font-black text-[6rem] text-white/[0.035] leading-none select-none pointer-events-none">
                  {String(idx + 1).padStart(2, "0")}
                 </span>
              </div>
            </Reveal>

            {/* Description + tests */}
            <div className={`${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col gap-7`}>
              <Reveal variants={fadeUp}>
                <p className="font-poppins italic text-stone-400 text-lg leading-[1.9]">
                  {section.description}
                </p>
              </Reveal>

              <Reveal variants={fadeUp} custom={1}>
                <div className="border border-white/[0.07] rounded-lg overflow-hidden bg-black/30">
                  {/* Table header */}
                  <div className="flex items-center gap-2 px-5 py-3
                                  bg-red-900/20 border-b border-red-800/25">
                    <span className="font-mono text-xs tracking-[0.18em] uppercase text-red-500">
                      Test Parameters
                    </span>
                    <span className="ml-auto font-mono text-xs text-stone-600">
                      {section.tests.length} items
                    </span>
                  </div>
                  {section.tests.map((test, i) => (
                    <TestRow key={i} test={test} index={i} />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ─── Table of Contents ─────────────────────────────────────────────────────── */
  function TOC({ sections }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0f0e0e] border border-red-900/30 rounded-xl p-8 md:p-10 mb-16">

        <p className="font-mono text-xs tracking-[0.22em] uppercase text-red-700 mb-6">
          Sections — Quick Navigation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {sections.map((section, i) => (
            <motion.a key={i} href={`#section-${i}`}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg
                        text-white/90 hover:text-red-400 hover:bg-red-900/10
                        transition-colors duration-150 no-underline group">
              <span className="font-mono text-xs text-red-800/90 w-6 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-poppins font-semibold text-base leading-snug">{section.name}</span>
              <svg className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-red-700"
                viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>
    );
  }

  /* ─── Divider ───────────────────────────────────────────────────────────────── */
  function Divider({ flip = false }) {
    return (
      <Reveal className="mb-16 mt-4">
        <div className="h-px" style={{
          background: flip
            ? "linear-gradient(90deg, transparent, rgba(153,27,27,0.4), rgba(153,27,27,0.08))"
            : "linear-gradient(90deg, #991b1b, rgba(153,27,27,0.15) 65%, transparent)",
        }} />
      </Reveal>
    );
  }

  /* ─── Main export ───────────────────────────────────────────────────────────── */
  export default function ServicePage() {
    const { slug } = useParams();
    const service = tests[slug];

    if (!service) {
      return (
        <div className="min-h-screen bg-[#0e0d0d]  flex items-center  font-poppins justify-center">
          <div className="text-center space-y-3 ">
            <p className="font-mono text-red-700 text-sm tracking-[0.2em] uppercase">404 — Not Found</p>
            <h1 className="font-poppins text-stone-100 text-5xl font-extrabold tracking-tight">
              Service not found
            </h1>
            <Link to="/" className="inline-block font-mono text-base text-red-500 hover:underline mt-2">
              ← Return home
            </Link>
          </div>
        </div>
      );
    }

    const totalTests = service.sections.reduce((acc, s) => acc + s.tests.length, 0);

    return (
      <div className="bg-[#0e0d0d] min-h-screen  text-stone-100">

        {/* ══════════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="relative h-[60vh] min-h-[440px]   max-h-[680px] overflow-hidden">

          {/* BG image zoom-in */}
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-cover bg-center "
            style={{ backgroundImage: `url(${service.banner})`, filter: "brightness(0.2) grayscale(0.35)" }} />

          {/* Red tint overlay */}
          <div className="absolute inset-0 "
            style={{ background: "linear-gradient(135deg, rgba(100,10,10,0.35) 0%, transparent 60%)" }} />

          {/* Bottom fade to page bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0d0d]" />

          {/* Grain texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")` }} />

          {/* Hero text */}
          <div className="relative z-10 h-full flex flex-col justify-end
                          max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-20 mt-15">

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-sm tracking-[0.28em] uppercase text-red-600 border-2 border-red-800 self-start py-1 px-2 rounded-full  mb-4">
              Maeon Laboratories — Testing Services
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-poppins font-extrabold text-stone-50 tracking-tight leading-[1.02]
                        text-[clamp(2.2rem,5.5vw,4.2rem)] max-w-3xl">
              {service.title}
            </motion.h1>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="flex flex-wrap items-center gap-10 mt-8">
              {[
                { val: service.sections.length, label: "Test Sections" },
                { val: totalTests, label: "Total Tests" },
                { val: "ISO · ASTM · JIS · IS", label: "Standards" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <span className="font-poppins font-extrabold text-red-500 text-3xl md:text-4xl leading-none">
                    {stat.val}
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] uppercase text-stone-600">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Red bottom border sweep */}
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[2px] origin-center"
            style={{ background: "linear-gradient(90deg, transparent, #991b1b 30%, #dc2626 50%, #991b1b 70%, transparent)" }} />
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            INTRODUCTION — warm charcoal bg
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#111110]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
            <SectionLabel>Overview</SectionLabel>

            {/* Hero pull-quote */}
            <Reveal variants={fadeUp} custom={0}>
              <p className="font-poppins italic text-stone-300 text-xl md:text-2xl leading-[1.9]
                            max-w-4xl border-l-[3px] border-red-800 pl-7 mb-12">
                {service.Introduction[0]}
              </p>
            </Reveal>

            {/* Remaining paras — 2-col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
              {service.Introduction.slice(1).map((para, i) => (
                <Reveal key={i} variants={fadeUp} custom={i + 1}>
                  <p className="font-poppins text-base leading-[1.9] text-stone-500">{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            TOC — dark slate bg
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#0f1117]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
            <TOC sections={service.sections} />
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            SECTION CARDS — each card has its own bg
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#0e0d0d]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-6">
            {service.sections.map((section, i) => (
              <SectionCard key={i} section={section} idx={i} />
            ))}
          </div>
        </div>


        {/* ══════════════════════════════════════════════════════════════════════
            CONCLUSION — deep reddish-warm bg
        ══════════════════════════════════════════════════════════════════════ */}
        <div className="bg-[#130e0e]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">

            <Reveal variants={scaleIn}>
              <div className="relative border border-red-900/35 rounded-xl p-10 md:p-16 overflow-hidden bg-black/20">
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-[3px] h-full rounded-l-xl"
                  style={{ background: "linear-gradient(to bottom, #991b1b, #450a0a, transparent)" }} />
                {/* Top-right ambient glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(153,27,27,0.12) 0%, transparent 70%)" }} />

                <SectionLabel>Conclusion</SectionLabel>

                <p className="font-poppins italic text-stone-300 text-xl leading-[1.95] max-w-3xl mb-12">
                  {service.conclusion}
                </p>

                <motion.a href="/contact us"
                  whileHover={{ scale: 1.02, backgroundColor: "#991b1b", color: "#fff0f0", borderColor: "#991b1b" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-3.5
                            border-2 border-red-800 text-red-500
                            font-poppins font-bold text-sm tracking-widest uppercase
                            rounded-lg no-underline transition-all duration-200">
                  Request Testing Services
                  <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>
            </Reveal>

            {/* Footer strip */}
            <Reveal variants={fadeUp}>
              <div className="mt-16 pt-8 border-t border-white/[0.05]
                              flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs tracking-[0.18em] uppercase text-stone-700">
                  Maeon Laboratories · Chennai, India
                </p>
                <p className="font-mono text-xs tracking-[0.12em] text-stone-700">
                  NABL Accredited · ISO/IEC 17025
                </p>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    );
  }