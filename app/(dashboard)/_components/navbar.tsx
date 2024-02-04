import React, { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ setIsSidebarOpen }: NavbarProps) {
  return (
    <nav className="absolute left-0 lg:left-96 top-0 flex items-center justify-center bg-pink-500">
      <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
        <span className="material-symbols-rounded">menu</span>
      </button>

      <div className="relative bg-purple-500">
        <span className="material-symbols-rounded">search</span>
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}
