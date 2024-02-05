import { nunito } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";

type NavbarProps = {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ setIsSidebarOpen }: NavbarProps) {
  const { id } = useParams();
  const pathname = usePathname();
  const [showSearchbar, setShowSearchbar] = useState(false);
  return (
    <nav className="absolute left-0 lg:left-[280px] top-0 flex w-full lg:w-[calc(100%-280px)] items-center justify-between px-4 sm:px-6 lg:px-8 py-3 bg-white lg:rounded-es-3xl lg:rounded-ee-3xl">
      <button
        onClick={() => setShowSearchbar(false)}
        className={`${
          showSearchbar ? "max-sm:block" : "hidden"
        } sm:hidden mr-4`}
      >
        <Image
          src="/icons/back.png"
          alt="Back Button Icon"
          width={24}
          height={13}
        />
      </button>

      <button
        className={`${showSearchbar ? "max-sm:hidden" : "flex"} lg:hidden`}
        onClick={() => setIsSidebarOpen(true)}
      >
        <span className="material-symbols-rounded text-[#030229] text-xl">
          menu
        </span>
      </button>

      {pathname === `/stories/${id}` && (
        // <div >
        <Link
          className="hidden lg:flex gap-4 items-center text-[#1D1D1B] text-display-sm xl:text-display-lg"
          href=".."
        >
          <Image
            src="/icons/back.png"
            alt="Back Button Icon"
            width={24}
            height={13}
          />
          Stories
        </Link>
        // </div>
      )}
      {/* Search Bar Container  */}
      {pathname !== `/stories/${id}` && (
        <div
          className={`${
            showSearchbar ? "block max-sm:w-full" : "max-sm:hidden"
          } relative rounded-xl h-10 lg:h-12`}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-2.5 lg:left-4 text-[#030229]">
            {/* <div className="size-4 xl:size-5"> */}
            <Image
              src="/icons/search.png"
              alt="Search Icon"
              width={20}
              height={5.83}
              className="size-4 xl:size-5"
            />
            {/* </div> */}
          </div>
          <input
            type="text"
            placeholder="Search"
            className={`w-full h-full pr-8 pl-9 lg:pl-12 xl:px-12 text-[#030229] rounded-xl border-none outline-none focus-visible:ring-1 bg-[#FAFAFA] placeholder:text-label-sm placeholder:text-[#CECECE] ${nunito.className}`}
          />
        </div>
      )}

      <div
        className={`${
          showSearchbar ? "max-sm:hidden sm:flex" : "flex"
        } items-center gap-2 lg:gap-4 xl:gap-8`}
      >
        {pathname !== `/stories/${id}` && (
          <button className="sm:hidden" onClick={() => setShowSearchbar(true)}>
            <div className="size-4">
              <Image
                src="/icons/search.png"
                alt="Search Icon"
                width={20}
                height={20}
              />
            </div>
          </button>
        )}
        {pathname !== `/stories/${id}` && (
          <button className="lg:hidden rounded-full p-1">
            <Image
              src="/icons/calendar.png"
              alt="Calendar Icons"
              width={20}
              height={20}
            />
          </button>
        )}
        {pathname !== `/stories/${id}` && (
          <div className="hidden lg:flex items-center rounded-[10px] h-11 xl:h-14 px-5 pr-4 xl:px-7 border bg-[#FAFAFA] border-[#A0A3BD]">
            <div className="flex items-center gap-[10px] cursor-pointer">
              <span className="text-label-sm xl:text-label-lg font-medium text-[#313145]">
                11-10-2022
              </span>
              <Image
                src="/icons/calendar.png"
                alt="Calendar Icons"
                width={20}
                height={20}
              />
            </div>

            <span className="text-label-md text-[#030229] px-4 xl:pl-[25px] xl:pr-[18px]">
              OR
            </span>

            <div className="flex items-center gap-[10px] cursor-pointer">
              <span className="text-label-sm xl:text-label-lg font-medium text-[#313145]">
                11-10-2022
              </span>
              <Image
                src="/icons/calendar.png"
                alt="Calendar Icons"
                width={20}
                height={20}
              />
            </div>
          </div>
        )}
        <div className="flex items-center gap-[10px] xl:bg-white rounded-full xl:rounded-lg xl:px-2 xl:pr-3 xl:h-14 xl:py-[10px] max-xl:outline-offset-2 outline-1 outline outline-[#E8EFF7] xl:w-60 transition-all duration-250 ease-in-out hover:bg-zinc-50 cursor-pointer">
          <div className="max-sm:size-7">
            <Image
              src="/images/profile-picture.png"
              alt="Akshita Patel Profile Picture"
              width={33}
              height={33}
              className="max-xl:rounded-full"
            />
          </div>

          <div className="hidden xl:flex justify-between items-center gap-[10px] text-[#373B5C] flex-1">
            <div>
              <span className="text-label-xxs">Welcome back,</span>
              <h4 className="text-title-md">Akshita Patel</h4>
            </div>

            <div>
              <Image
                src="/icons/Stroke-1.png"
                alt="Expand More Arrow"
                width={15.5}
                height={8.5}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
