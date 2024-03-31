"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <motion.header
        onClick={toggleOpen}
        style={{ cursor: "pointer" }}
        variants={{
          open: { color: "red" },
          collapsed: { color: "blue" },
        }}
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
      >
        {title}
      </motion.header>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          collapsed: { opacity: 1, height: 0 },
        }}
        transition={{ duration: 0.5, type: "spring", spring: 200 }}
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
      <hr />
    </div>
  );
};

export default function StyleA() {
  return (
    <div>
      <Accordion title="Section 1">
        <p>This is the content of section 1.</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content of section 2.</p>
      </Accordion>
    </div>
  );
}
