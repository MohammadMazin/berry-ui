"use client";
import DrawerButton from "./DrawerButton";
import SyntaxHighlighterWrapper from "../SyntaxHighlighterWrapper";
import { useState } from "react";

const colors = {
  primary: "bg-orange-500",
  secondary: "bg-slate-700",
};

export default function Drawer() {
  const [clicked, setClicked] = useState(false);
  const codeString = `
  "use client";
  import { useState } from "react";
  import { motion } from "framer-motion";
  
  const colors = {
    primary: "bg-orange-500",
    secondary: "bg-slate-700",
  };
  
  export default function DrawerButton() {
    const [clicked, setClicked] = useState(false);
    const [height, setHeight] = useState(50);
  
    const handleClick = (): void => {
      setClicked(!clicked);
    };
  
    return (
      <motion.div
        className={\`relative h-[50px] w-[150px] ${
          clicked ? colors.primary : colors.secondary
        } cursor-pointer overflow-hidden rounded-full font-bold\`}
        onClick={() => handleClick()}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ y: 0 }}
          animate={clicked ? { y: -height } : undefined}
          whileHover={clicked ? { y: -height + 5 } : { y: -5 }}
        >
          <motion.div
            className={\`flex h-full w-full items-center justify-center ${colors.primary} text-black\`}
          >
            OPEN
          </motion.div>
          <motion.div
            className={\`flex h-full w-full items-center justify-center text-white ${colors.secondary}\`}
          >
            CLOSE
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  `;

  return (
    <div className="flex w-full items-center justify-center ">
      <span className="flex w-1/4 justify-center">
        <DrawerButton />
      </span>
      <SyntaxHighlighterWrapper
        codeString={codeString}
        title=".tsx"
      ></SyntaxHighlighterWrapper>
    </div>
  );
}
8;
