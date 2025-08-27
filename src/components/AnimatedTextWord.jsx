import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, 1000)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 1, // Adjust this duration for slower text animation
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 1, // Adjust this duration for slower text animation
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      style={{ overflow: "hidden"}}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div variants={child} style={{ whiteSpace: "nowrap" }}>
        <h2 className="uppercase text-7xl font-semibold"><span className="text-rose-500">bash</span> <span className="text-slate-50">blitz</span></h2>
      </motion.div>
      <motion.div variants={child}>
        <h2 className="uppercase text-3xl"><span className="text-slate-50">your event,</span> <span className="text-rose-500">your way!</span></h2>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTextWord;
