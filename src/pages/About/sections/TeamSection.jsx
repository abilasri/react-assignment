// // import React from 'react'
// // import Woman from "../../../assets/aboutus/women.avif"
// // import Man from "../../../assets/aboutus/man.jpg"
// // const teamMembers = [
// //   {
// //     name: "Dr. John Smith",
// //     role: "Senior Scientist",
// //     img: Man,
// //   },
// //   {
// //     name: "Dr. Emma Watson",
// //     role: "Research Analyst",
// //     img: Woman,
// //   },
// //   {
// //     name: "Dr. David Miller",
// //     role: "Lab Technician",
// //     img: Man,
// //   },
// //   {
// //     name: "Dr. Sarah Lee",
// //     role: "Quality Head",
// //     img: Man,
// //   },
// //   {
// //     name: "Dr. Sarah Lee",
// //     role: "Quality Head",
// //     img: Man,
// //   },
// // ];

// // export default function TeamSection() {
// //   return (
// //     <section className="py-16 px-6 md:px-16 bg-white">
// //       {/* Heading */}
// //       <div className="text-center mb-12">
// //         <h4 className="text-red-700 font-semibold uppercase tracking-widest text-sm">
// //           Our Team
// //         </h4>
// //         <h2 className="text-3xl md:text-4xl font-bold mt-2">
// //           Meet Our Experts
// //         </h2>
// //         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
// //           Our team of experienced professionals ensures accurate testing and
// //           reliable results across all laboratory services.
// //         </p>
// //       </div>

// //       {/* Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
// //         {teamMembers.map((member, index) => (
// //           <div
// //             key={index}
// //             className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md"
// //           >
// //             {/* Image */}
// //             <div className="overflow-hidden">
// //               <img
// //                 src={member.img}
// //                 alt={member.name}
// //                 className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
// //               />
// //             </div>

// //             {/* Overlay on hover */}
// //             <div className="absolute inset-0 bg-red-800/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
// //               <h3 className="text-lg font-semibold">{member.name}</h3>
// //               <p className="text-sm">{member.role}</p>
// //             </div>

// //             {/* Bottom Info */}
// //             <div className="p-4 text-center bg-white">
// //               <h3 className="font-semibold">{member.name}</h3>
// //               <p className="text-sm text-gray-500">{member.role}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import React,{useState} from 'react'
// import Woman from "../../../assets/aboutus/women.avif"
// import Man from "../../../assets/aboutus/man.jpg"
// import FounderMessage from './FounderMessage';
// import { motion } from 'framer-motion';

// const teamMembers = [

//   {
//     name: "S. SHARMILA",
//     role: "Chief Operational Officer",
//     img: Man,
//     description:
//       "Sharmila has over 15+ years of experience in various multi-national organizations managing corporate operations and leading cross functional teams. She oversees operations of the laboratory and controls testing process cycle from inquiry till completion.",
//   },
//   // {
//   //   name: "DURAI SEKAR",
//   //   role: "Founder, Rubber Specialist, Lab Chief",
//   //   img: Man,
//   //   description:
//   //     "Lic of Plastics & Rubber Inst (London) Durai Sekar holds a Master of science and has extensive experience in R&D centers of rubber laboratories. He is also a consultant for several esteemed manufacturers and an expert in polymer testing. He has 35+ years of experience with industry leaders across India. Gladly await to assist you on selection of tests on rubber, composites and other non-metals.",
//   // },
//   {
//     name: "Dr. P. POOMALAI",
//     role: "TM, Plastics Specialist",
//     img: Man,
//     description:
//       "Lic of Plastics & Rubber Inst (London) Dr. Poomalai holds a PhD , Master of Science and have 35+ years of experience in Plastic research center including Deputy Director - Tech (Ex.) of CIPET. He provides expertise advise on Plastic testings' and selection of tests for your technical trouble shooting.",
//   },
//   {
//     name: "Dr. GOMATHI SEKAR",
//     role: "Dy TM, Head – Chemistry and Microbiology",
//     img: Woman,
//     description:
//       "Gomathi holds a Phd, Master of Science (Micro Biology & Chemistry).Dr. Gomathi is a PhD,and Master of Science (Micro Biology & Chemistry). She handled extensive chemical tests (Organic & Inorganic throughout her career as a Scientist (Ex.) in ICMR. She has more than 35+ years of experience in chemical & microbial testing. Dr Gomathi is leading Maeon’s wet lab.",
//   },
//   {
//     name: "K. S. SABARIS",
//     role: "Manager - Testing",
//     img: Man,
//     description:
//       "Mr Sabaris, a dynamic test engineer, leads the engineers and chemists for a precise and swift analysis of customers test materials.",
//   },
  
// ];

// export default function TeamSection() {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };
//   return (
//     <section className="py-16 px-6 md:px-16 bg-white">
    
//       {/* Heading */}
//       <div className="text-center mb-12">
//           <motion.div variants={fadeUp} className="border px-4 py-2 mb-5 rounded-full text-xs inline-block border-red-800 text-red-800 ">
//                  Accredited Testing Laboratory
//                 </motion.div>
//         <h2 className="text-3xl md:text-4xl font-bold mt-2">
//           Meet Our Experts
//         </h2>
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//           Our team of experienced professionals ensures accurate testing and
//           reliable results across all laboratory services.
//         </p>
//       </div>
//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md"
//           >
//             {/* Image */}
//             <img
//               src={member.img}
//               className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
//             />

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-red-800/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
//               <h3 className="text-lg font-semibold">{member.name}</h3>
//               <p className="text-sm mb-4">{member.role}</p>

//               {/* Button */}
//               <button
//                 onClick={() => setSelectedMember(member)}
//                 className="bg-white text-red-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
//               >
//                 View Details
//               </button>
//             </div>

//             {/* Bottom Info */}
//             <div className="p-4 text-center bg-white">
//               <h3 className="font-semibold">{member.name}</h3>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
//           <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedMember(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black"
//             >
//               ✕
//             </button>

//             {/* Content */}
//             <img
//               src={selectedMember.img}
//               className="w-full h-60 object-cover rounded-lg mb-4"
//             />

//             <h2 className="text-xl font-bold">{selectedMember.name}</h2>
//             <p className="text-red-700 mb-2">{selectedMember.role}</p>
//             <p className="text-gray-600 text-sm">
//               {selectedMember.description}
//             </p>
//           </div>
//         </div>
//       )}


//     </section>
//   );
// }

import React, { useState } from 'react';
import Woman from "../../../assets/aboutus/women.avif";
import Man from "../../../assets/aboutus/man.jpg";
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    name: "S. SHARMILA",
    role: "Chief Operational Officer",
    img: Man,
    description:
      "Sharmila has over 15+ years of experience in various multi-national organizations managing corporate operations..."
  },
  {
    name: "Dr. P. POOMALAI",
    role: "TM, Plastics Specialist",
    img: Man,
    description:
      "Dr. Poomalai holds a PhD and has 35+ years of experience in Plastic research..."
  },
  {
    name: "Dr. GOMATHI SEKAR",
    role: "Dy TM, Head – Chemistry and Microbiology",
    img: Woman,
    description:
      "Gomathi holds a PhD and has more than 35+ years of experience in chemical & microbial testing..."
  },
  {
    name: "K. S. SABARIS",
    role: "Manager - Testing",
    img: Man,
    description:
      "Mr Sabaris leads engineers and chemists for precise and swift analysis..."
  },
];

export default function TeamSection() {

  const [selectedMember, setSelectedMember] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-white">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <div className="border px-4 py-2 mb-5 rounded-full text-xs inline-block border-red-800 text-red-800">
          Accredited Testing Laboratory
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Meet Our Experts
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Our team ensures accurate testing and reliable results.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md"
          >

            {/* Image */}
            <img
              src={member.img}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-red-800/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center px-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm mb-4">{member.role}</p>

              <button
                onClick={() => setSelectedMember(member)}
                className="bg-white text-red-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-200"
              >
                View Details
              </button>
            </div>

            {/* Bottom Info */}
            <div className="p-4 text-center bg-white">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl max-w-md w-full p-6 relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              {/* Content */}
              <img
                src={selectedMember.img}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold">
                {selectedMember.name}
              </h2>

              <p className="text-red-700 mb-2">
                {selectedMember.role}
              </p>

              <p className="text-gray-600 text-sm">
                {selectedMember.description}
              </p>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}