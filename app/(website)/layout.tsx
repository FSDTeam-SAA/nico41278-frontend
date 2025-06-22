import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Home/Navbar";

export const metadata: Metadata = {
  title: "nico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
