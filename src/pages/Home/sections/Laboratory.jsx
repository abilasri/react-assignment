
// import React from "react";
// import { motion } from "framer-motion";
// import Lab1 from "../../../assets/images/lab (1).jpg";
// import Lab2 from "../../../assets/images/lab (2).jpg";
// import Lab3 from "../../../assets/images/lab (3).jpg";
// import Lab4 from "../../../assets/images/lab (4).jpg";
// import Button from "../../../components/ui/Button";
// import { ArrowRight, CircleArrowRight } from "lucide-react";
// import AboutLaboratory from "./AboutLaboratory";
// const Laboratory = () => {
//   const tests = [
//     "Stress-Strain, Stiffness, Compressive measurements",
//     "High, Low Thermal effects",
//     "Fatigue, endurance test",
//     "Creep, Hysteresis, Stress Relaxation",
//     "Xenon Weathering, Ozone resistance estimation",
//     "Optical, Gloss measurements",
//     "Permeability level",
//     "Modulus measurements",
//     "Climatic deterioration, Thermal Shock effect",
//     "Odour, Flammability levels",
//     "Spl tests for Composites",
//     "Humidity and chemical environment effects",
//   ];

//   const images = [Lab1, Lab2, Lab3, Lab4];

//   // 🔥 Animations
//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const imageAnim = {
//     hidden: { opacity: 0, y: 60, scale: 0.9 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   // ✨ Split heading
//   const splitText = (text) =>
//     text.split(" ").map((word, i) => (
//       <motion.span key={i} variants={fadeUp} className="inline-block mr-2">
//         {word}
//       </motion.span>
//     ));

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="bg-red-800/20 px-40 py-20 flex font-poppins min-h-screen flex-col gap-12"
//     >
//       {/* 🔥 TOP SECTION */}
//       <motion.section
//         variants={container}
//         className="flex justify-between gap-10"
//       >
//         <div>
//           <motion.div
//             variants={fadeUp}
//             className="border px-4 py-2 mb-5 rounded-full inline-block text-xs"
//           >
//             About Our Laboratory
//           </motion.div>

//           <h1 className="text-5xl max-w-5xl font-mono text-red-800 leading-tight">
//             {splitText(
//               "Vast laboratory scope welcomes you at MAEON LABORATORIES"
//             )}
//           </h1>
//         </div>

//         <motion.p
//           variants={fadeUp}
//           className="text-xl max-w-xl leading-relaxed"
//         >
//           Our laboratory is dedicated to bridging the gap between scientific
//           theory and practical application.
//         </motion.p>
//       </motion.section>

//       {/* 🔥 IMAGE GRID */}
//       <motion.section
//         variants={container}
//         className="grid grid-cols-2 md:grid-cols-4 gap-6"
//       >
//         {images.map((img, index) => (
//           <motion.div
//             key={index}
//             variants={imageAnim}
//             whileHover={{ scale: 1.05 }}
//             className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
//           >
//             <motion.img
//               src={img}
//               alt=""
//               className="w-full h-72 object-cover"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.4 }}
//             />
//           </motion.div>
//         ))}
//       </motion.section>

//       {/* 🔥 BUTTON */}
//       <motion.div variants={fadeUp} className="self-end ">
//         <Button className="group flex flex-col  justify-center items-center gap-2 text-xl bg-red-800 text-white hover:bg-black transition-all duration-500 rounded-full px-6 py-3">
//          Know More
//           {/* <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-2 group-hover:rotate-90" /> */}
//         </Button>
//       </motion.div>

//       {/* 🔥 LIST SECTION */}
//       <motion.div
//         variants={container}
//         className="rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-xl"
//       >
//         <motion.h3
//           variants={fadeUp}
//           className="text-3xl font-semibold mb-6 text-red-800"
//         >
//           Few Tests of Interest
//         </motion.h3>

//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
//           {tests.map((item, index) => (
//             <motion.li
//               key={index}
//               variants={fadeUp}
//               className="group flex items-start justify-between gap-4 text-black cursor-pointer"
//               whileHover={{ x: 10 }}
//             >
//               <div className="flex items-start gap-3">
//                 <span className="mt-2 w-2.5 h-2.5 bg-red-800 rounded-full"></span>
//                 <span className="leading-relaxed max-w-xs group-hover:text-red-800 transition">
//                   {item}
//                 </span>
//               </div>

//               <CircleArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red-800" />
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

          
//     </motion.div>
//   );
// };

// export default Laboratory;

import React from "react";
import { motion } from "framer-motion";
import Lab1 from "../../../assets/images/lab (1).jpg";
import Lab2 from "../../../assets/images/lab (2).jpg";
import Lab3 from "../../../assets/images/lab (3).jpg";
import Lab4 from "../../../assets/images/lab (4).jpg";
import Button from "../../../components/ui/Button";
import { CircleArrowRight } from "lucide-react";

const Laboratory = () => {

  const tests = [
    "Stress-Strain, Stiffness, Compressive measurements",
    "High, Low Thermal effects",
    "Fatigue, endurance test",
    "Creep, Hysteresis, Stress Relaxation",
    "Xenon Weathering, Ozone resistance estimation",
    "Optical, Gloss measurements",
    "Permeability level",
    "Modulus measurements",
    "Climatic deterioration, Thermal Shock effect",
    "Odour, Flammability levels",
    "Spl tests for Composites",
    "Humidity and chemical environment effects",
  ];

  const images = [Lab1, Lab2, Lab3, Lab4];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <motion.span key={i} variants={fadeUp} className="inline-block mr-2">
        {word}
      </motion.span>
    ));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-red-800/20 px-40 py-20 flex font-poppins flex-col gap-12"
    >

      {/* TOP */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-between gap-10"
      >
        <div>
          <motion.div variants={fadeUp} className="border px-4 py-2 mb-5 rounded-full text-xs inline-block">
            About Our Laboratory
          </motion.div>

          <h1 className="text-5xl max-w-5xl font-mono text-red-800 leading-tight">
            {splitText("Vast laboratory scope welcomes you at MAEON LABORATORIES")}
          </h1>
        </div>

        <motion.p variants={fadeUp} className="text-xl max-w-xl">
          Our laboratory bridges the gap between scientific theory and real-world application.
        </motion.p>
      </motion.section>

      {/* IMAGES */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            variants={imageAnim}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <motion.img
              src={img}
              className="w-full h-72 object-cover"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* BUTTON */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="self-end"
      >
        <Button className="bg-red-800 text-white rounded-full px-6 py-3 hover:bg-black">
          Know More
        </Button>
      </motion.div>

      {/* LIST */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl bg-white/80 backdrop-blur-md p-8 shadow-xl"
      >
        <motion.h3 variants={fadeUp} className="text-3xl mb-6 text-red-800">
          Few Tests of Interest
        </motion.h3>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              whileHover={{ x: 10 }}
              className="flex justify-between items-start cursor-pointer"
            >
              <div className="flex gap-3">
                <span className="w-2.5 h-2.5 bg-red-800 mt-2 rounded-full"></span>
                <span>{item}</span>
              </div>
              <CircleArrowRight className="w-5 h-5" />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Laboratory;

