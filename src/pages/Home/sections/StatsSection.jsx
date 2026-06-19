import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const StatsSection = () => {
  const stats = [
    { value: 218, label: "Happy Clients" },
    { value: 740, label: "Test Scope" },
    { value: 11, label: "Domains Served" },
    { value: 14, label: "Years in Service" },
  ];

  const [startCount, setStartCount] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStartCount(true)}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.h1
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setStartCount(true)}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}h1 className="pb-5 text-4xl font-bold">
        Our Achievements
      </motion.h1>

      <div className="mx-25 rounded-full py-8 px-30 bg-black/80 text-white mb-10 font-poppins">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
              whileHover={{ scale: 1.1 }}
            >
              <h2 className="text-4xl font-bold">
                <Counter end={stat.value} start={startCount} delay={i * 0.2} />+
              </h2>

              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;

function Counter({ end, start, duration = 2, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;

    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        startValue += increment;

        if (startValue >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(startValue));
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [start, end, duration, delay]);

  return <span>{count}</span>;
}