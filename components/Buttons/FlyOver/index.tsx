"use client";

import { motion } from "framer-motion";
import ButtonWrapper from "../ButtonWrapper";

const button = {
  rest: {
    scale: 1,
    y: 0,
    x: 0,
  },
  hover: {
    y: -5,
    x: -5,
  },
};

const arrow = {
  rest: {
    x: 0,
  },
  hover: {
    x: 5,
  },
};

export default function FlyOver() {
  return (
    <ButtonWrapper>
      <motion.div
        whileHover={"hover"}
        initial={"rest"}
        animate={"rest"}
        exit={"exit"}
        className="relative w-max"
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-md bg-white"></div>
        <motion.button
          variants={button}
          className="z-10 flex w-full justify-center gap-2 rounded-md bg-purple-700 px-8 py-4 text-xl font-bold"
        >
          Click Me!
          <motion.div variants={arrow}>-{">"}</motion.div>
        </motion.button>
      </motion.div>
    </ButtonWrapper>
  );
}
