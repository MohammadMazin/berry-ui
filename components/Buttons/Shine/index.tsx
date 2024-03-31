"use client";
import { motion } from "framer-motion";
import ButtonWrapper from "../ButtonWrapper";

const shine = {
  rest: {
    left: -75,
    right: "auto",
    rotate: "30deg",
    scale: 3,
  },
  hover: {
    left: "auto",
    right: -75,
    rotate: "30deg",
    scale: 3,
  },
};

export default function Shine() {
  return (
    <ButtonWrapper>
      <motion.div
        className="group relative w-max overflow-hidden rounded-md bg-indigo-800"
        whileHover={"hover"}
        initial={"rest"}
        animate={"rest"}
      >
        <motion.div
          variants={shine}
          className="absolute left-[-12px] top-0 h-full w-[25px] bg-blue-400 opacity-50"
        ></motion.div>
        <motion.button className=" z-10 flex w-full justify-center gap-2 px-8 py-4 text-xl font-bold text-white">
          Click Me!
        </motion.button>
      </motion.div>
    </ButtonWrapper>
  );
}
