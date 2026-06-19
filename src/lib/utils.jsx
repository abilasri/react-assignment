import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none "
      animate={{
        x: position.x - 6,
        y: position.y - 6,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};



export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
