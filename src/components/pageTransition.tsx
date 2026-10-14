"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;