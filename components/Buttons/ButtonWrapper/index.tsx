import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ButtonWrapper({ children }: Props) {
  return (
    <section className="w-full rounded-lg border-slate-700 bg-gray-800 ps-8">
      {children}
    </section>
  );
}
