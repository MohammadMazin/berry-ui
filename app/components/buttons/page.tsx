import ButtonWrapper from "@/components/Buttons/ButtonWrapper";
import Drawer from "@/components/Buttons/Drawer";
import FlyOver from "@/components/Buttons/FlyOver";
import Shine from "@/components/Buttons/Shine";
import ShinyText from "@/components/Buttons/ShinyText";
import Springy from "@/components/Buttons/Springy";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

const buttons = [
  { component: <FlyOver /> },
  { component: <Shine /> },
  { component: <Springy /> },
  { component: <Drawer /> },
  { component: <ShinyText /> },
];

export const metadata: Metadata = {
  title: "Buttons",
};
export default function Page() {
  return (
    <section className="w-full">
      <Title title="Buttons" />
      <div className="flex flex-col items-center justify-center gap-4">
        {buttons.map((button, index) => {
          return <ButtonWrapper key={index}>{button.component}</ButtonWrapper>;
        })}
      </div>
    </section>
  );
}
