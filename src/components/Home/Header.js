import React from "react";
import girl from "../../img/girl.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="home-header">
      <div className="left">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="project-name"
        >
          PROXYMA STREAM
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="project-name-description"
        >
          THE NEXT GENERATION OF VIDEO SECURITY AND EDUCATION
        </motion.p>
        <motion.p
          className="idea-description"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          We use only advanced technologies to achieve the perfect result.
          Unsurpassed quality security makes it possible not to worry about
          security throughout the use of our technology
        </motion.p>
      </div>
      <div className="right">
        <motion.img
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1 }}
          src={girl}
          alt="girl"
        />
      </div>
    </div>
  );
};

export default Header;
