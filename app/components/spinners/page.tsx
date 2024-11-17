import ButtonWrapper from "@/components/Buttons/ButtonWrapper";
import SyntaxHighlighterWrapper from "@/components/Buttons/SyntaxHighlighterWrapper";
import NewtonCradle from "@/components/Spinners/NewtonCradle";
import Title from "@/components/ui/Title";
import { Metadata } from "next";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export const metadata: Metadata = {
  title: "Spinners",
};

const components = [
  {
    component: <NewtonCradle />,
    name: "NewtonCradle",
    codeString: `"use client";
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
              [\`.ball-1\`, { x: -1 }, { duration: 0.15, ease: "easeOut" }],
              [".ball-0", { x: -12 }, { duration: 0.25, ease: "easeOut", at: "<" }],
              [\`.ball-1\`, { x: 0 }, { duration: 0.25, ease: "easeIn" }],
              [".ball-0", { x: 0 }, { duration: 0.15, ease: "easeIn" }],
              [\`.ball-\${length - 2}\`, { x: 1 }, { duration: 0.15, ease: "easeOut" }],
              [
                \`.ball-\${length - 1}\`,
                { x: 12 },
                { duration: 0.25, ease: "easeOut", at: "<" },
              ],
              [\`.ball-\${length - 2}\`, { x: 0 }, { duration: 0.15, ease: "easeOut" }],
              [\`.ball-\${length - 1}\`, { x: 0 }, { duration: 0.25, ease: "easeIn" }],
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
                    className={\`ball-\${index} block h-[10px] w-[10px] rounded-full bg-white\`}
                  ></span>
                );
              })}
            </div>
          );
        }`,
  },
];

export default function Page() {
  return (
    <section className="w-full">
      <Title title="Spinners" />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {components.map((component, index) => {
            return (
              <ButtonWrapper key={component.name}>
                <div className="flex items-center">
                  {component.component}
                  <SyntaxHighlighterWrapper
                    title=".tsx"
                    codeString={component.codeString}
                  />
                </div>
              </ButtonWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
