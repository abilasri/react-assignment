import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      setDirection(currentScrollY > lastScrollY ? "down" : "up");
      setScrollY(currentScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return { scrollY, direction };
}