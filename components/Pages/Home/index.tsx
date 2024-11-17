"use client";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";
import GradientBorder from "@/components/Buttons/GradientBorder";

const initial = {
  fontSize: "4rem",
  x: 0,
  y: 0,
  filter: "blur(0px)",
};

const animate = {
  fontSize: [null, "7rem", "8.5rem", "10rem"],
  y: [null, -70, -30, 0],
};

const transition = {
  type: "tween",
  ease: "easeInOut",
  times: [0, 0.3, 0.6, 1],
  duration: 0.5,
};

export default function Home() {
  return (
    <main>
      <div className={`h-[100vh] ${styles.bg} relative`}>
        <div className={styles.radial}></div>
        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center">
          <div className="relative ">
            <motion.span
              className="absolute bottom-0 -z-10 h-[10px] w-full"
              style={{
                mixBlendMode: "multiply",
                background:
                  "radial-gradient(circle, #48004e7e 0%, rgba(0, 0, 0, 0) 100%)",
              }}
              initial={{ filter: "blur(2px)" }}
              animate={{
                filter: [, "blur(5px)", "blur(3px)", "blur(2px)"],
              }}
            ></motion.span>
            <h1 className="z-10 text-xl font-extrabold">
              {"Berry UI".split("").map((child, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block cursor-default text-white hover:text-red-800"
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  {child}
                </motion.span>
              ))}
            </h1>
          </div>
          <h3 className="mt-8 text-5xl text-white">
            Fancy components for your fancy needs
          </h3>
          <button></button>
          <GradientBorder>
            <Link href="components/buttons">Components</Link>
          </GradientBorder>
        </div>
      </div>
    </main>
  );
}
