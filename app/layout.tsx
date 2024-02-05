import type { Metadata } from "next";

import "./globals.css";
import "./globalicons.css";

import Sidebar from "./(dashboard)/_components/sidebar";
import { urbanist } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "WeFrame Assignement - Sameer Singh",
  description: "Internship Assignement for We Frame Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
