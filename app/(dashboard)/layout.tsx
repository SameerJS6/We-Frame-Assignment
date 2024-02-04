import React, { ReactNode } from "react";
import Sidebar from "./_components/sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <main className="flex-1 overflow-y-auto h-full">{children}</main>
    </div>
  );
}
