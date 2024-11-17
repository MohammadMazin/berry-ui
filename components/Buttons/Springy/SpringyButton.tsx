"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import ButtonWrapper from "../ButtonWrapper";

const loadingText = {
  rest: {
    top: "250%",
    transition: {
      type: "spring",
      mass: 0.5,
    },
  },
  show: {
    top: "50%",
    transition: {
      type: "spring",
      mass: 0.5,
    },
  },
};

const submitText = {
  rest: {
    top: "-250%",
    transition: {
      type: "spring",
      mass: 0.5,
    },
  },
  show: {
    top: "50%",
    transition: {
      type: "spring",
      mass: 0.5,
    },
  },
};

export default function SpringyButton() {
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      className="group relative w-[200px] overflow-hidden rounded-full bg-red-900"
      whileTap={{ scale: 0.975 }}
      whileHover={{ scale: 1.025 }}
    >
      <motion.div className="absolute left-0 top-0 -z-10 h-full w-[500%]"></motion.div>
      <motion.button
        onClick={() => setLoading(!loading)}
        className=" relative z-10 flex w-full justify-center gap-2 px-8 py-8 text-xl font-bold text-white"
      >
        <motion.p
          initial={"show"}
          variants={submitText}
          animate={loading ? "rest" : "show"}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          Submit
        </motion.p>
        <motion.p
          variants={loadingText}
          initial={"rest"}
          animate={loading ? "show" : "rest"}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform "
        >
          <span className="block animate-spin">
            <FaSpinner />
          </span>
        </motion.p>
      </motion.button>
    </motion.div>
  );
}
