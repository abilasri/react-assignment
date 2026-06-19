  // eslint-disable-next-line no-unused-vars
  import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import useScroll from "../../hooks/useScroll";
import { cn } from "../../lib/utils";
 import logo from "../../assets/newlogowhite.webp";
import { ArrowUpRight } from "lucide-react";

 function Navbar() {
  const { scrollY } = useScroll();
//const ease = [0.22, 1, 0.36, 1];

  // const isHidden = direction === "down" && scrollY > 80;
  const isScrolled = scrollY > 5;

//   const testingMenu = [
//   "Plastic Materials & Plastic Products",
//   "Rubber Materials & Rubber Products",
//   "Composites",
//   "Foams & Sponges",
//   "Films",
//   "Coated Fabrics - Woven, Knitted, Non-Woven, Felt",
//   "Adhesives & Tapes",
//   "Hoses & Pipes",
//   "Belts",
//   "Sealing Elements - O Rings & Rubber Seals, Gaskets",
//   "Product Functional & Durability Tests",
// ];

const testingMenu= [
  "Plastic and Plastic Products",
"Rubber Material & Property Testing",
"Composite Material Property Testing and Analysis",
"Foam and Sponge Property Testing",
"Films and sheets testing",
"Coated Fabrics Material Testing",	
"Transmission and Conveyor Belts Testing",
"Tubes & Pipes Testing",
"Transmission and Conveyor Belts Testing",
"Seals and Gaskets Testing",
"Product Functional, Durability Tests"
]

const blogs = [
  {
    "title": "5 Reasons Why The Industry Must Foam Test",
    id:"foam-testing"
},
  {
    "title":"Top 5 Benefits of Rubber Quality Testing",
    "id":"rubber-testing"
  }
]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? "bg-black backdrop-blur-xl" : ""
      } font-poppins`}
    >
      {/* Top spacing animation */}
      <motion.div
        animate={{ paddingTop: isScrolled ? 0 : 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          
          {/* 🧊 Glass Container */}
          <motion.div
            layout
            animate={{
              borderRadius: isScrolled ? 0 : 999,
              maxWidth: isScrolled ? "100%" : "90%",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
              "mx-auto flex items-center py-6 px-12",
              "bg-white/10 backdrop-blur-xl",
              "border border-white/20",
              "shadow-lg text-white"
            )}
          >
            {/* ✨ Inner Reflection */}
            <motion.div
              layout
              animate={{
                borderRadius: isScrolled ? 0 : 999,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-white/10 opacity-20 pointer-events-none"
            />

            {/* 🔹 LEFT — Logo */}
            <div className="flex-1 z-10">
              <Link to="/" className="inline-block">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={logo}
                  alt="Logo"
                  className="h-11 w-auto"
                />
              </Link>
            </div>

            {/* 🔹 CENTER — Menu */}
            <div className="flex-1 flex justify-center items-center gap-8 z-10 whitespace-nowrap">
              <NavItem label="Home" />
              <NavItem label="About" />
              <Dropdown label="Testing & Analysis" items={testingMenu} />
              <Dropdown label="Blogs" items={blogs} />
              <NavItem label="Facilities" />
            </div>

<div className="flex-1 flex justify-end">

<div className="group border px-5 py-2 rounded-full border-white/30 hover:border-white hover:bg-red-800/80 transition flex items-center gap-2">
  
  <NavItem label="Contact Us" />

  <ArrowUpRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />

</div>
</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

function NavItem({ label }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative text-lg font-medium hover:scale-110  hover:opacity-100 hover:text-white transition"
    >
      <Link to={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
        {label}
      </Link>

      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}



function Dropdown({ label, items }) {
  return (
    <div className="relative group  z-50">
      {/* Parent */}
      <motion.div
        whileHover={{ y: -2 }}
        className="cursor-pointer text-lg font-medium"
      >
        {label}
      </motion.div>

      {/* Dropdown */}
      <div className="absolute left-0 mt-4 w-80 bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
        <ul className="p-4 space-y-3">
         {items.map((item, index) => {
  const isObject = typeof item === "object";

  const label = isObject ? item.title : item;

  {/* const path = isObject
    ? `${item.id}`
    : item.toLowerCase().replace(/[^a-z0-9]+/g, "-"); */}
const path = isObject ? item.id : item;
  return (
    <li key={index}>
      <Link
        // to={label === "Blogs" ? `/blog/${path}` : `/blog/${path}`}
        to={isObject ? `/blog/${path}` : `/services/${path}`}
        className="block text-sm hover:bg-red-800 p-1 hover:rounded-2xl whitespace-normal hover:px-5 transition-all duration-300 hover:text-white text-gray-300 font-semibold font-poppins"
      >
        {label}
      </Link>
    </li>
  );
})}
        </ul>
      </div>
    </div>
  );
}