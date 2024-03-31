import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 flex-shrink-0 border-r-2 border-black ">
      <div>
        <h1 className="text-2xl font-semibold">Berry UI</h1>
      </div>
      <nav className="flex flex-col gap-2">
        <Link href="buttons">Buttons</Link>
        <Link href="accordion">Accordion</Link>
      </nav>
    </div>
  );
}
