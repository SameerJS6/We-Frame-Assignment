"use client";

import React, { ElementRef, useEffect, useRef, useState } from "react";
import { navLinksData } from "@/utils/navLink";
import useClickOutside from "@/hooks/useClickOutside";
import Navbar from "./navbar";

export default function Sidebar() {
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  useClickOutside(sidebarRef, handleCloseSidebar);
  return (
    <>
      <aside
        ref={sidebarRef}
        className={`sidebar max-lg:fixed max-lg:top-0 max-lg:h-full lg:w-80 bg-white lg:pointer-events-auto lg:opacity-100 group/sidebar shadow-2xl transition-all ease-in-out w-[85%] sm:max-w-sm px-4 sm:px-6 rounded-e-2xl lg:py-4 max-lg:pt-8 lg:relative overflow-y-auto z-[99999] ${
          isSidebarOpen
            ? "max-lg:left-0 max-lg:opacity-100 max-lg:pointer-events-auto max-lg:duration-[250ms]"
            : "max-lg:left-[-500px] max-lg:opacity-0 max-lg:pointer-events-none max-lg:duration-[450ms]"
        }`}
      >
        {/* Toggle Menu  */}
        <div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden absolute top-4 sm:top-1 right-4 rounded-[50%] h-10 px-2 grid place-content-center text-[#292D32] transition-all duration-[250ms] ease-in-out hover:bg-zinc-100"
          >
            <span className="material-symbols-rounded text-xl">menu_open</span>
          </button>
        </div>

        <div className="flex flex-col lg:gap-8 h-full justify-around">
          <div className="flex flex-col gap-2">
            {navLinksData.map((link, index) => (
              <button
                key={index}
                className={`flex gap-4 items-center transition-all duration-[250ms] ease-in-out rounded-xl h-[40px] sm:h-[48px] lg:h-14 px-5 text-label-sm2 active:rounded-3xl ${
                  activeIndex === index
                    ? "bg-purple-500 text-white hover:bg-purple-600 fill-white last-of-type:stroke-white nav-link-white"
                    : "text-[#53545C] hover:bg-zinc-100 fill-[#292D32] last-of-type:stroke-[#53545C] nav-link"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {link.icon}
                <p>{link.label}</p>
                {link.badge && (
                  <span
                    className={`grid place-content-center text-label-xs size-5 lg:size-6 rounded-full ${
                      activeIndex === index ? "bg-white" : "bg-[#E8E9FF]"
                    } text-[#7950F2]`}
                  >
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
          <a
            role="button"
            className="flex gap-4 items-center transition-all duration-[250ms] ease-in-out rounded-xl h-[52px] lg:h-14 px-5 text-label-sm2 active:rounded-3xl bg-[#E8E9FF] hover:bg-[#d4d6fe] text-[#1C1D22]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Contact Support
          </a>
        </div>
      </aside>

      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      <div
        data-overlay={isSidebarOpen}
        className="max-lg:scrim pointer-events-none"
      />
    </>
  );
}
