import React, { useState } from "react";
import Button from "../../../components/ui/Button";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "who", label: "Who We Are" },
  { id: "what", label: "What We Do" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("who");


  return (
    <div className="relative px-10 py-20 flex flex-col items-center font-poppins bg-linear-to-b from-gray-200 via-gray-100 to-transparent">
      {/* <div className="absolute inset-0 -z-10 opacity-20 
  [background-image:linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
  [background-size:40px_40px]">
</div> */}
      {/* 🔹 Tabs Section */}
       <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="border px-4 py-2 mb-5 rounded-full text-xs border-red-800 text-red-800"
            >
              About Us
            </motion.div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-10 border-b pb-4 "
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative text-lg font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "text-red-800"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}

            {/* underline */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-red-800 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* 🔹 Content Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-10 relative min-h-50"
      >
        <AnimatePresence mode="wait">
          {activeTab === "who" && (
            <motion.div
              key="who"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl flex flex-col items-center text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                Who We Are
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
              MAEON Laboratories is an independent testing laboratory with accreditation by NABL, India for ISO17025 Laboratory Management System and is the latest of its kind in India. <br/><br/> The testings' are performed as per ASTM American Society for Testing and Materials Standards, ISO International Organization for Standardization Standards, Japanese Industrial Standards, BIS Bureau of Indian Standards, DIN etc.,
              </p>
            </motion.div>
          )}

          {activeTab === "what" && (
            <motion.div
              key="what"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl flex flex-col items-center text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                What We Do
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
              We at MAEON strive to achieve best customer satisfaction by offering testing service for Rubber and Plastic materials using appropriate equipments adopting international standards. Our Laboratory is committed to provide reliable test results on time, by complying with ISO/IEC 17025:2005 and continuously improving the effectiveness of the management system in all our processes. <br/><br/> This is achieved through active involvement of all the staff whose competency and capability are upgraded through appropriate training periodically and by implementing the documented policies and procedures.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 🔹 Button Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-10"
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-red-800 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg">
            Know More
          </Button>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Aboutus;