import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const Testimonials = () => {

  const testimonials = [
    {
      text: "We have used the test facilities at Maeon and appreciate the swift response. Their technical insight in interpretation of test results is particularly helpful.",
      name: "Mr Srikanth Krishnamurthy",
      title: "Director & CEO, ALFA RUBBER & SPRINGS (P) LTD",
    },
    {
      text: "Thanks for your adequate technical report and solutions at the appropriate time. It would greatly help us to convince our customer precisely.",
      name: "Mr Magesh Ravi",
      title: "R&D, RANE",
    },
    {
      text: "Your analytical approach is excellent which helped resolve our quality issues.",
      name: "Mr M Saravanan",
      title: "KOMOS AUTOMOTIVE",
    },
    {
      text: "We are happy to work with your lab for your timely support and quality work.",
      name: "Mr Dinesh Babu",
      title: "Quality Engineer, DELFINGEN",
    },
    {
      text: "Maeon Lab technically sound in their testing of Rubber and Plastics.",
      name: "Mr Ramanathan",
      title: "",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // 🔥 Animations
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
      transition: { duration: 0.6 },
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
      className="min-h-screen bg-red-800/85 flex flex-col items-center p-20 font-poppins"
    >

      {/* Badge */}
      <motion.div
        variants={fadeUp}
        className="border px-4 py-2 mb-5 rounded-full text-xs border-white text-white"
      >
        Our Testimonials
      </motion.div>

      {/* Heading */}
      <motion.div
        variants={container}
        className="text-5xl max-w-5xl text-center text-white leading-tight"
      >
        {splitText("What our clients say about their experience with us")}
      </motion.div>

      {/* Subtext */}
      <motion.p
        variants={fadeUp}
        className="text-lg mt-8 text-white text-center max-w-3xl"
      >
        Ensures highest standards of testing compliance and integrity bring customers back again and again for our services.
      </motion.p>

      {/* Slider */}
      <motion.div
        variants={fadeUp}
        className="mt-16 w-full max-w-3xl relative border-2 border-white rounded-2xl p-8 bg-white/20 backdrop-blur-md"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-8 rounded-2xl shadow-2xl"
          >
            <p className="text-lg mb-6 leading-relaxed">
              “{testimonials[index].text}”
            </p>

            <div className="h-0.5 w-1/2 bg-red-800 opacity-30 mb-5"></div>

            <div>
              <h2 className="font-semibold text-lg">
                {testimonials[index].name}
              </h2>
              <p className="text-sm text-gray-600">
                {testimonials[index].title}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Dots */}
      <motion.div variants={fadeUp} className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full cursor-pointer transition-all duration-500 ${
              i === index ? "bg-white w-6 scale-125" : "bg-white/40 w-2.5"
            }`}
          />
        ))}
      </motion.div>

    </motion.div>
  );
};

export default Testimonials;