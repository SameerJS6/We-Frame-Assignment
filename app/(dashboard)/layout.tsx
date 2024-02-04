import React, { ReactNode } from "react";
import Sidebar from "./_components/sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex lg:gap-4 min-h-dvh">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-full bg-lime-500">
        {children}
      </main>
    </div>
  );
}
