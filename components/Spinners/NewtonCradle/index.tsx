"use client";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";

const length = 5;
export default function NewtonCradle() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animateCradle();
  }, []);

  async function animateCradle() {
    animate([
      [`.ball-1`, { x: -1 }, { duration: 0.15, ease: "easeOut" }],
      [".ball-0", { x: -12 }, { duration: 0.25, ease: "easeOut", at: "<" }],
      [`.ball-1`, { x: 0 }, { duration: 0.25, ease: "easeIn" }],
      [".ball-0", { x: 0 }, { duration: 0.15, ease: "easeIn" }],
      [`.ball-${length - 2}`, { x: 1 }, { duration: 0.15, ease: "easeOut" }],
      [
        `.ball-${length - 1}`,
        { x: 12 },
        { duration: 0.25, ease: "easeOut", at: "<" },
      ],
      [`.ball-${length - 2}`, { x: 0 }, { duration: 0.15, ease: "easeOut" }],
      [`.ball-${length - 1}`, { x: 0 }, { duration: 0.25, ease: "easeIn" }],
    ])
      .then(() => {
        animateCradle();
      })
      .catch((error) => {
        console.error("Animation error:", error);
      });
  }

  return (
    <div ref={scope} className="flex w-max rounded-full bg-gray-900 px-8 py-2">
      {Array.from({ length }).map((_, index) => {
        return (
          <span
            key={index}
            className={`ball-${index} block h-[10px] w-[10px] rounded-full bg-white`}
          ></span>
        );
      })}
    </div>
  );
}
