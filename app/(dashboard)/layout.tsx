import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-dvh">
      <main className="flex-1 overflow-y-auto h-full lg:pl-[280px]">
        {children}
      </main>
    </div>
  );
}
