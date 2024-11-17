"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type AccordionProps = {
  first?: boolean;
  last?: boolean;
  title: string;
  children: any;
};

const Accordion = ({
  title,
  children,
  first = false,
  last = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const arrowUp = {
    collapsed: {
      height: 0,
      bottom: -38,
    },
    open: {
      bottom: 0,
      height: 16,
    },
  };
  const arrowDown = {
    collapsed: {
      bottom: 0,
    },
    open: {
      bottom: 7,
    },
  };

  const header = {
    collapsed: {
      backgroundColor: "transparent",
      color: "black",
    },
    open: {
      color: "#b02091",
    },
  };

  const card = {
    collapsed: {
      backgroundImage: "linear-gradient(to right, #ffffff 50%, #ffffff)",
      color: "black",
    },
    open: {
      backgroundImage: "linear-gradient(to right, #ffffff 50%, #ffebf9)",
      color: "#b02091",
    },
  };

  return (
    <>
      <motion.div
        className={`${first && "rounded-t-lg"} ${last && "rounded-b-md"}  pb-2`}
        variants={card}
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
      >
        <motion.header
          className="flex w-full items-center justify-between rounded-t-lg p-2 text-lg font-semibold transition-all "
          onClick={toggleOpen}
          style={{ cursor: "pointer" }}
          variants={header}
          initial="collapsed"
          animate={isOpen ? "open" : "collapsed"}
        >
          {title}
          {/* arrows */}
          <div className="relative h-[20px] w-[20px] overflow-hidden">
            <motion.svg
              variants={arrowDown}
              className="absolute"
              fill="#9620b0"
              height="16"
              width="16"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </motion.svg>
            <motion.svg
              variants={arrowUp}
              className="absolute"
              fill="#9620b0"
              height="16"
              width="16"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_224_"
                d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
              />
            </motion.svg>
          </div>
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
          className={` rounded-b-lg px-2 text-sm text-gray-600`}
        >
          {children}
        </motion.div>
      </motion.div>
      <span className="h-[5px] w-full rounded-b-full bg-gradient-to-r from-transparent to-[#ffceed]"></span>
    </>
  );
};

function StyleAAccordion() {
  return (
    <>
      <div className="flex flex-col bg-white p-8 drop-shadow-lg ">
        <Accordion title="Froot Loops" first>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            reiciendis laboriosam a, quas natus vel ea molestias ipsam ex saepe
            possimus illum optio quam placeat rem repellendus quod quis odit.
            reiciendis laboriosam a, quas natus vel ea molestias ipsam ex saepe
            possimus illum optio quam placeat rem repellendus quod quis odit.
            reiciendis laboriosam a, quas natus vel ea molestias ipsam ex saepe
            possimus illum optio quam placeat rem repellendus quod quis odit.
          </p>
        </Accordion>
        <hr />
        <Accordion title="Kellogs">
          <p>This is the content of section 2.</p>
        </Accordion>
        <hr />
        <Accordion title="Weetos">
          <p>This is the content of section 2.</p>
        </Accordion>
      </div>
    </>
  );
}

export default StyleAAccordion;
