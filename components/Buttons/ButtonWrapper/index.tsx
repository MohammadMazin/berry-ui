import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ButtonWrapper({ children }: Props) {
  return (
    <section className="w-full rounded-lg border-2 border-slate-700 p-8">
      {children}
    </section>
  );
}
