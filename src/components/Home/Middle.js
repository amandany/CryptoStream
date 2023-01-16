import React from "react";
import { motion } from "framer-motion";
import geometry from '../../img/geometry.png';
import geometry2 from '../../img/geometry2.png';


let advantages = ["Database", "Collect any Data", "Surveillance"];

const Middle = () => {
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
      <div className="safe">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          ABSOLUTELY SAFE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Our main goal is to create a flexible, powerful, lightweight and easy
          system for viewing content. We encrypt <span className="underline">ALL</span> outgoing
          content from client to server.
        </motion.p>
      </div>
      <div className="geometry-wrapper">

      <img className="img-geometry-1" src={geometry2} alt="geometry" />
      </div>
    </div>
  );
};

export default Middle;
