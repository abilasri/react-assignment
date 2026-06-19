// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import VideoBG from "../../../assets/videobg.png";
// import Lab from "../../../assets/lab.jpg";
// const   Laboratory = () => {
//   const [hovered, setHovered] = useState(false);

//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* 🔥 Background */}
//       <div className="relative">
//         <img
//           src={VideoBG}
//           alt="Video Background"
//           className="w-screen h-screen object-cover"
//         />

//         {/* 🎯 Play Button */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          
//           <div
//             onClick={() => setOpen(true)}
//             className="group relative w-40 h-40 flex items-center justify-center cursor-pointer"
//           >
            
//             {/* 🔴 Circle */}
//             <div className="absolute inset-0 rounded-full bg-red-800 transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]"></div>

//             {/* ▶️ Play Icon */}
//             <div className="relative z-10 w-0 h-0 border-l-20 border-l-white border-y-12 border-y-transparent ml-1 transition group-hover:scale-110"></div>

//             {/* 🔤 Curved Text */}
//             <svg
//               className="absolute inset-0 w-full h-full animate-spin-slow group-hover:[animation-play-state:paused]"
//               viewBox="0 0 200 200"
//             >
//               <defs>
//                 <path
//                   id="circlePath"
//                   d="
//                     M 100, 100
//                     m -70, 0
//                     a 70,70 0 1,1 140,0
//                     a 70,70 0 1,1 -140,0
//                   "
//                 />
//               </defs>

//               <text fill="white" fontSize="14" fontWeight="bold">
//                 <textPath href="#circlePath" startOffset="0%">
//                   PLAY • PLAY • PLAY •
//                 </textPath>
//               </text>

//               <text fill="white" fontSize="14" fontWeight="bold">
//                 <textPath href="#circlePath" startOffset="50%">
//                   PLAY • PLAY • PLAY •
//                 </textPath>
//               </text>
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* 🎬 MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
//           {/* Close on background click */}
//           <div
//             className="absolute inset-0"
//             onClick={() => setOpen(false)}
//           ></div>

//           {/* Video */}
//           <div className="relative w-[90%] md:w-[70%] aspect-video z-10">
//             <iframe
//               className="w-full h-full rounded-xl"
//               src="https://www.youtube.com/embed/Nl8M6Zr2Zy4?autoplay=1"
//               title="YouTube video"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}


// <div className="p-20 bg-linear-to-b from-red-800/20 via-red-800/5 to-transparent flex gap-12 font-poppins justify-center items-center">

// <div
//   className="flex-1 relative"
//   onMouseEnter={() => setHovered(true)}
//   onMouseLeave={() => setHovered(false)}
// >
//   {/* Image */}
//   <img
//     src={Lab}
//     alt="Laboratory"
//     className={`rounded-xl shadow-lg transition duration-500 ${
//       hovered ? "scale-105" : "scale-100"
//     }`}
//   />

//   {/* Overlay (opens like eye) */}
//   <motion.div
//     className="absolute inset-0 rounded-xl flex items-center justify-center 
//     bg-white/30 backdrop-blur-md  origin-center overflow-hidden"

//     initial={{ scaleY: 0 }}
//     animate={hovered ? { scaleY: 1 } : { scaleY: 0 }}
//     transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
//   >
//     {/* Text (appears AFTER opening) */}
//     <motion.p
//       className="text-lg text-black text-center"

//       initial={{ opacity: 0, y: 30 }}
//       animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}

//       transition={{
//         duration: 0.4,
//         delay: hovered ? 0.3 : 0, // 👈 delay AFTER box opens
//       }}
//     >
//       With an excellent infrastructure, Maeon Laboratories is in-par with
//       world’s best laboratories in providing wide range of testing services,
//       specialising in Plastics, Rubber, Composites, Foam, Films, Belts,
//       Adhesives, Tapes, Hoses, Tubes and other non-metals.
//     </motion.p>
//   </motion.div>
// </div>
//   {/* Right side content */}
//   <div className="flex-1">
//     <div className=" flex-2 ">
//         <div className=" text-2xl font-semibold mb-6 animate-fadeInUp">
//           Reliable & High Quality Laboratory
//           <div className=" h-0.5 bg-red-800 mt-5 opacity-30 rounded-full"></div>
//         </div>
//         <div className="text-gray-700 text-lg leading-relaxed animate-fadeInUp delay-150 text-justify">
//          Experience the precision and promptness of testing services for assessment of basic mechanical properties, chemical properties, thermal properties, optical properties, degradation properties, weathering characteristics, electrical properties, functional/ durability characteristics, at Maeon Laboratories.
//          <br/>
// Make use of our state-of-the art facility for preparation of Specimens and coupons of your raw material for evaluation of its properties. Experts in Maeon Laboratories can provide you material characterisation services requiring high level of technical know-how in terms of both executing the tests and interpreting the results.
//         </div>
//         </div>
//   </div>

// </div>
    
//     </>
//   );
// };
// export default Laboratory;


import React, { useState } from "react";
import { motion } from "framer-motion";
import VideoBG from "../../../assets/videobg.png";
import Lab from "../../../assets/lab.jpg";

const AboutLaboratory = () => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="relative">
        <img
          src={VideoBG}
          alt="Video Background"
          className="w-screen h-screen object-cover"
        />

        {/* 🎯 Play Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            onClick={() => setOpen(true)}
            className="group relative w-40 h-40 flex items-center justify-center cursor-pointer"
          >
            {/* 🔴 Glow Pulse */}
            <div className="absolute inset-0 rounded-full bg-red-800/40 animate-ping"></div>

            {/* 🔴 Main Circle */}
            <div className="relative z-10 w-full h-full rounded-full bg-red-800 flex items-center justify-center transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,0,0,0.6)]">

              {/* ▶️ SVG Play Icon */}
              <svg
                className="w-12 h-12 text-white ml-1 transition group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* 🔤 Rotating Text */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow group-hover:[animation-play-state:paused]"
              viewBox="0 0 200 200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>

              <text fill="white" fontSize="14" fontWeight="bold">
                <textPath href="#circlePath">
                  PLAY • VIDEO • PLAY • VIDEO •
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* 🎬 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative w-[90%] md:w-[70%] aspect-video z-10">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/Nl8M6Zr2Zy4?autoplay=1"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 🔥 CONTENT SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="p-20 bg-linear-to-b from-red-800/20 via-red-800/5 to-transparent flex gap-12 font-poppins justify-center items-center"
      >

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUp}
          className="flex-1 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={Lab}
            alt="Laboratory"
            className={`rounded-xl shadow-lg transition duration-500 ${
              hovered ? "scale-105" : "scale-100"
            }`}
          />

          {/* 👁️ Eye Opening Overlay */}
          <motion.div
            className="absolute inset-0 rounded-xl flex items-center justify-center 
            bg-white/30 backdrop-blur-md origin-center overflow-hidden"
            initial={{ scaleY: 0 }}
            animate={hovered ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <motion.p
              className="text-lg text-black text-center px-6"
              initial={{ opacity: 0, y: 30 }}
              animate={
                hovered
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.4,
                delay: hovered ? 0.3 : 0,
              }}
            >
              With an excellent infrastructure, Maeon Laboratories is in-par
              with world’s best laboratories in providing wide range of testing
              services across Plastics, Rubber, Composites and more.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div variants={container} className="flex-1">

          {/* Heading */}
          <motion.div variants={fadeUp} className="text-2xl font-semibold mb-6">
            Reliable & High Quality Laboratory
            <motion.div
              variants={fadeUp}
              className="h-0.5 bg-red-800 mt-5 opacity-30 rounded-full"
            />
          </motion.div>

          {/* Paragraphs */}
          {[
            "Experience the precision and promptness of testing services for assessment of mechanical, chemical, thermal and optical properties.",
            "Make use of our state-of-the-art facility for preparation of specimens and evaluation of material properties.",
            "Experts provide material characterisation services with high technical expertise."
          ].map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-gray-700 text-lg leading-relaxed mb-4 text-justify"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutLaboratory;