"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

function FramerWrapper({
  children,
  delay = 0.25,
  y = 15,
  x = 0,
  duration = 1,
  scale = 0,
  className,
}) {
  const ref = React.useRef(null); // Ref to track the element
  const isInView = useInView(ref, { once: true }); // Detect if in view

  return (
    <motion.div
      ref={ref} // Attach the ref
      initial={scale === 0 ? { opacity: 0, y: y, x: x } : { opacity: 0, y: y, x: x, scale: scale }}
      animate={
        isInView
          ? scale === 0
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 1, y: 0, x: 0, scale: 1 }
          : undefined
      }
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: delay, duration: duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default FramerWrapper;
