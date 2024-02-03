"use client";

import React, { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <aside
        className={`max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:min-w-[200px] lg:w-80 lg:bg-white lg:pointer-events-auto lg:opacity-100 group/sidebar bg-blue-500 lg:text-black text-white shadow-2xl transition-all ease-in-out max-w-sm ${
          isSidebarOpen
            ? "max-lg:left-0 max-lg:opacity-100 max-lg:pointer-events-auto max-lg:duration-[250ms]"
            : "max-lg:left-[-250px] max-lg:opacity-0 max-lg:pointer-events-none max-lg:duration-[450ms]"
        }`}
      >
        <button onClick={() => setIsSidebarOpen(false)}>
          <span className="material-symbols-rounded lg:hidden">menu_open</span>
        </button>
        Sidebar
      </aside>

      {!isSidebarOpen && (
        <nav className="fixed  lg:hidden z-[9999999]">
          <button onClick={() => setIsSidebarOpen(true)}>
            <span className="material-symbols-rounded">menu</span>
          </button>
        </nav>
      )}
    </>
  );
}
