import StyleA from "@/components/Accordion/StyleA";
import FlyOver from "@/components/Buttons/FlyOver";
import Shine from "@/components/Buttons/Shine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buttons",
};
export default function Page() {
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold">Accordion</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <StyleA />
      </div>
    </section>
  );
}
