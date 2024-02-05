import React, { Dispatch, SetStateAction } from "react";
import { inter } from "@/utils/fonts";

type NavButtonProps = {
  activeIndex: number;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  icon: React.JSX.Element;
  label: string;
  badge?: number;
};

export default function NavButton({
  activeIndex,
  index,
  setActiveIndex,
  icon,
  label,
  badge,
}: NavButtonProps) {
  return (
    <button
      key={index}
      className={`flex gap-4 items-center transition-all duration-[250ms] ease-in-out rounded-xl h-[40px] sm:h-[48px] lg:h-14 px-5 text-label-sm2 active:rounded-3xl ${
        activeIndex === index
          ? "bg-purple-500 text-white hover:bg-purple-600 fill-white last-of-type:stroke-white nav-link-white"
          : "text-[#53545C] hover:bg-zinc-100 fill-[#292D32] last-of-type:stroke-[#53545C] nav-link"
      }`}
      onClick={() => setActiveIndex(index)}
    >
      {icon}
      <p>{label}</p>
      {badge && (
        <span
          className={`${
            inter.className
          } grid place-content-center text-label-xs size-5 lg:size-6 rounded-full ${
            activeIndex === index ? "bg-white" : "bg-[#E8E9FF]"
          } text-[#7950F2]`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}
