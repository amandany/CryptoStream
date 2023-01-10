import React from "react";
import { motion } from "framer-motion";

let advantages = ["Database", "Collect any Data", "Surveillance"];

const Middle = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="home-middle">
      <motion.h1
        className="header"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        HIGH LEVEL <span>SECURITY</span>
      </motion.h1>
      <motion.ol>
        {advantages.map((el, i) => {
          return (
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0, delay: 1 * (i + 1) }}
              key={i}
              className="advantage"
            >
              <span>NO</span> {el}
            </motion.p>
          );
        })}
      </motion.ol>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="safe"
      >
        ABSOLUTELY SAFE
      </motion.h1>
    </div>
  );
};

export default Middle;
