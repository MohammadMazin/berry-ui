import { ReactNode } from "react";
import "./style.css";

type Props = {
  children: ReactNode;
};

export default function GradientBorder({ children }: Props) {
  return (
    // <button className="animated-gradient-button rounded-full bg-red-500 px-4 py-2">
    //   {children}
    // </button>
    <button className="gradient-border-button">{children}</button>
  );
}
