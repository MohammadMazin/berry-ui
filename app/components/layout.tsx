import Sidebar from "@/components/Sidebar/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Components",
    template: "%s | Components",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="ml-auto mr-auto flex max-w-screen-2xl gap-4 p-4 ">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
