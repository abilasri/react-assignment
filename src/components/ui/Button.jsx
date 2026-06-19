import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  className,
  size = "md",
  ...props
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full transition font-medium",
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Ripple */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        variants={{
          hover: {
            scale: 6,          // 🔥 expand big
            opacity: [0.5, 0] // fade out while expanding
          },
        }}
        transition={{ duration: 1 }}
        className="absolute w-20 h-20 bg-current rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </motion.button>
  );
}