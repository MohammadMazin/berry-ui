import Link from "next/link";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const urls = [
    {
      href: "/components/buttons",
      text: "Buttons",
    },
    {
      href: "/components/accordions",
      text: "Accordion",
    },
    {
      href: "/components/errors",
      text: "404 Pages",
    },
    {
      href: "/components/spinners",
      text: "Spinners",
    },
  ];

  return (
    <div className="flex h-full min-h-[95vh] w-64 flex-shrink-0 flex-col border-r-2 border-black px-2">
      <div>
        <h1 className="text-2xl font-bold text-yellow-500 hover:opacity-75">
          <Link href={"/"}>Berry UI</Link>
        </h1>
      </div>
      <hr />
      <nav className="flex flex-col gap-2">
        {urls.map((url) => {
          return <SidebarLink key={url.text} href={url.href} text={url.text} />;
        })}
      </nav>
    </div>
  );
}
