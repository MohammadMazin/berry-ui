import Grid404 from "@/components/404Pages";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Pages",
};
export default function Page() {
  return (
    <section className="w-full">
      <Title title="404 Pages" />
      <div className="flex flex-col items-center justify-center gap-4">
        <Grid404 />
      </div>
    </section>
  );
}
