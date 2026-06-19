// import React from "react";

// import Man from "../../../assets/aboutus/man.jpg"
// import { motion } from "framer-motion";

// export default function FounderMessage() {

//     const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Founder Image */}
//         <div className="flex justify-center md:justify-start">
//           <img
//             src={Man}
//             alt="Founder"
//             className=" w-96 h-96 object-cover rounded-2xl shadow-lg"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <motion.div variants={fadeUp} className="border px-4 py-2 mb-5 rounded-full text-xs inline-block border-red-800 text-red-800">
//                           Founder's Message
//                          </motion.div>
         
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             A Vision Built on Quality & Trust
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-4">
//             Lic of Plastics & Rubber Inst (London)

//           </p>

//           <p className="text-gray-600 leading-relaxed mb-6">
//            Durai Sekar holds a Master of science and has extensive experience in R&D centers of rubber laboratories. He is also a consultant for several esteemed manufacturers and an expert in polymer testing. He has 35+ years of experience with industry leaders across India. Gladly await to assist you on selection of tests on rubber, composites and other non-metals.

//           </p>

//           {/* Founder Info */}
//           <div className="flex items-center gap-4">
//             <div>
//               <h3 className="font-semibold text-2xl">DURAI SEKAR</h3>
//               <p className="text-sm text-gray-500">Founder, Rubber Specialist, Lab Chief</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import Man from "../../../assets/aboutus/man.jpg";
import { motion } from "framer-motion";

export default function FounderMessage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-gray-50 py-16 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center md:justify-start"
        >
          <motion.img
            variants={fadeUp}
            src={Man}
            alt="Founder"
            className="w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp}>
          <motion.div
            variants={fadeUp}
            className="border px-4 py-2 mb-5 rounded-full text-xs inline-block border-red-800 text-red-800"
          >
            Founder's Message
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A Vision Built on Quality & Trust
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 mb-4">
            Lic of Plastics & Rubber Inst (London)
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-600 mb-6">
            Durai Sekar holds a Master of science and has extensive experience in R&D centers of rubber laboratories...
          </motion.p>

          {/* Founder Info */}
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div>
              <h3 className="font-semibold text-2xl">DURAI SEKAR</h3>
              <p className="text-sm text-gray-500">
                Founder, Rubber Specialist, Lab Chief
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}