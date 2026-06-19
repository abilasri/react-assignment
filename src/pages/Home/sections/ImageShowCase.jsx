import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import rubber from "../../../assets/testingImages/rubber.jpg";
import plastics from "../../../assets/testingImages/plastics.jpg";
import films from "../../../assets/testingImages/films.jpg";
import pipes from "../../../assets/testingImages/pipes.jpg";
import sponges from "../../../assets/testingImages/sponges.jpg";
import tapes from "../../../assets/testingImages/tapes.jpg";

export default function ImageShowcase() {
  const items = [
    {
      img: rubber,
      title: "Rubber Testing",
      link: "/testing/plastic",
    },
   
    {
      img: films,
      title: "Films Testing",
      link: "/testing/films",
    },
     {
      img: plastics,
      title: "Rubber Analysis",
      link: "/testing/rubber",
    },
    {
      img: pipes,
      title: "Foams & Sponges",
      link: "/testing/foams",
    },
    {
      img: sponges,
      title: "Tapes",
      link: "/testing/tapes",
    },
    {
      img: tapes,
      title: "Adhesives",
      link: "/testing/adhesives",
    },
  ];

  // 🎨 Bento-style layout pattern
  const layoutClasses = [
    "md:col-span-2 md:row-span-2", // big
    "md:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-2", // tall
    "md:col-span-2 md:row-span-1", // wide
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
  ];


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

// Split text into words for animation
const splitText = (text) =>
  text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      variants={fadeUp}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));

  const imageVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotate: -2,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


  return (
    // <div className=" p-5  mb-5 font-poppins ">
    // <div className="text-white py-15 px-15 rounded-4xl bg-red-800/90">
    // <div className="  text-start border px-4 py-2 ml-8 mb-5 rounded-full inline-block text-xs ">   

    // Key Testing and Analysis  
    // </div>
    // <section className=" pb-5 px-10 text-start flex justify-between">
    //   <h2 className="text-6xl  mb-8  ">Leading innovation across critical fields of research</h2>
    //   <p className="text-lg text-gray-300 max-w-2xl ">
    //     Explore our comprehensive range of testing services designed to ensure the quality and performance of your materials. From rubber to plastics, films to adhesives, we provide expert analysis and insights to meet your specific needs.
    //   </p>
    // </section>
    // <section >
    //   <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[150px]">
        
    //     {items.map((item, i) => (
    //       <motion.div
    //         key={i}
    //         className={layoutClasses[i]}
    //         initial={{ opacity: 0, y: 40 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ delay: i * 0.1 }}
    //         viewport={{ once: true }}
    //       >
    //         <div className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer">

    //           {/* Image */}
    //           <img
    //             src={item.img}
    //             alt={item.title}
    //             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    //           />

    //           {/* Overlay */}
    //           <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
                
    //             <p className="text-xl font-semibold mb-3 group-hover:text-black">
    //               {item.title}
    //             </p>

    //             <Link
    //               to={item.link}
    //               className="px-4 py-2 border border-black group-hover:text-black hover:font-semibold rounded-full text-md hover:bg-black hover:text-white transition"
    //             >
    //               Learn More
    //             </Link>
    //           </div>

    //         </div>
    //       </motion.div>
    //     ))}

    //   </div>
    // </section>
    // </div>
    // </div>
    <div className="p-5 mb-5 font-poppins">
      <div className="text-white py-20 px-10 md:px-16 rounded-4xl bg-red-800/90 overflow-hidden">

        {/* Tag */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="border px-4 py-2 ml-4 mb-6 rounded-full inline-block text-xs"
        >
          Key Testing and Analysis
        </motion.div>

        {/* Heading + Paragraph */}
        <motion.section
          className="pb-10 px-4 md:px-10 flex flex-col md:flex-row justify-between gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl max-w-4xl leading-tight font-semibold">
            {splitText(
              "Leading innovation across critical fields of research"
            )}
          </h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-200 max-w-xl leading-relaxed"
          >
            Explore our comprehensive range of testing services designed to ensure the quality and performance of your materials. From rubber to plastics, films to adhesives, we provide expert analysis and insights to meet your specific needs.
          </motion.p>
        </motion.section>

        {/* Grid */}
      <motion.section
  className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[150px]"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={imageVariant}
      className={layoutClasses[i]}
    >
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >

        {/* Image */}
        <motion.img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xl font-semibold mb-3 text-black">
            {item.title}
          </p>

          <Link
            to={item.link}
            className="px-4 py-2 border border-black group-hover:text-black rounded-full text-md hover:bg-black hover:text-white transition"
          >
            Learn More
          </Link>
        </motion.div>

      </motion.div>
    </motion.div>
  ))}
</motion.section>

      </div>
    </div>
  );
}