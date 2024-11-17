"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Grid404() {
  const [blockSize, setBlockSize] = useState(20); // Initial block size
  const [numBlocks, setNumBlocks] = useState(0); // Number of blocks

  useEffect(() => {
    function calculateBlockSize() {
      // Assuming a 20x20 grid for 400 blocks
      const blocksPerRow = 15;
      // Use the viewport's smaller dimension to maintain square blocks
      const sizeBasedOnWidth = window.innerWidth / blocksPerRow;
      const sizeBasedOnHeight = window.innerHeight / blocksPerRow;
      const newSize = Math.min(sizeBasedOnWidth, sizeBasedOnHeight);
      console.log((window.innerWidth * window.innerHeight) / newSize);
      setBlockSize(newSize);
      setNumBlocks(
        (window.innerWidth / newSize) * (window.innerHeight / newSize),
      );
    }

    calculateBlockSize();

    // Recalculate on window resize
    window.addEventListener("resize", calculateBlockSize);

    // Cleanup listener
    return () => window.removeEventListener("resize", calculateBlockSize);
  }, []);

  return (
    // Ideally, the height of this div is meant to take 100% of the screen- I fixed it to 400px for preview purpsoes
    <div className="relative flex h-[400px] w-full flex-wrap overflow-hidden bg-white">
      <span
        className="pointer-events-none absolute flex h-full w-full flex-col items-center justify-center gap-4 text-4xl text-red-500"
        style={{
          background:
            "linear-gradient(90deg, white 0%, transparent 6%, transparent 75%, white 100%);",
        }}
      >
        <span
          className="text-center text-9xl font-extrabold text-black"
          style={{
            textShadow: "0 12px 0px #ffd900",
          }}
        >
          404 <br />
        </span>
        <span
          className="text-center font-extrabold text-black"
          style={{
            textShadow: "0 4px 0px #ffd900",
          }}
        >
          {" "}
          Page Not Found
        </span>
      </span>
      {Array.from({ length: numBlocks }, (_, i) => (
        <Block key={i} size={blockSize} />
      ))}
    </div>
  );
}

const blockVariant = {
  rest: {
    backgroundColor: "transparent",
  },
  hover: {
    backgroundColor: "#ff8800",
  },
};

const Block = ({ size }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="border border-slate-700"
      style={{ width: `${size}px`, height: `${size}px` }} // Apply the calculated size
      onMouseEnter={() => setHover(true)}
      initial={blockVariant.rest}
      animate={hover ? blockVariant.hover : blockVariant.rest}
    />
  );
};
