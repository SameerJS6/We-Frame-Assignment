import React from "react";

import Image from "next/image";
import Link from "next/link";

type StoriesCardProps = {
  id: number;
  title: string;
  image: string;
  label: string;
  category: string;
  views: number;
  time: string;
};

export default function StoriesCard({
  id,
  title,
  image,
  label,
  category,
  views,
  time,
}: StoriesCardProps) {
  return (
    <div className="relative rounded-[10px] overflow-hidden ">
      <div className="relative">
        <Image
          src={image}
          alt="Story Poster"
          width={340}
          height={500}
          className="w-full aspect-[2/3] object-cover h-full"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between  p-4">
          <div className="flex gap-1 items-center justify-end">
            <div className="rounded-md h-6 flex items-center justify-center gap-1.5 px-2.5 bg-white">
              <Image
                src="/icons/eye.png"
                alt="Eye Icon"
                width={16}
                height={16}
              />
              <span className="text-label-xs2 text-[#9058FF]">{views}</span>
            </div>

            <div className="rounded-md h-6 grid place-content-center px-2.5 bg-white">
              <Image
                src="/icons/status-up.png"
                alt="Eye Icon"
                width={16}
                height={16}
              />
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-title-xl font-semibold text-white">
                {title}
              </h4>

              <div className="flex justify-between items-center my-2">
                <div className="flex items-center">
                  <p className="uppercase text-title-lg font-extrabold text-white">
                    {category}
                  </p>

                  <div className="size-1.5 rounded-full bg-[#D9D9D9] ml-1.5 mr-2.5" />

                  <p className="text-[#A0A3BD] text-title-lg font-semibold">
                    {time}
                  </p>
                </div>

                <div
                  className={`capitalize grid place-content-center px-5 py-2 rounded-md text-label-sm2 ${
                    label === "created"
                      ? "bg-[#E3D5FF] text-[#7950F2]"
                      : label === "published"
                      ? "bg-[#E4FFF8] text-[#0DAD82]"
                      : "bg-[#F4F4F4] text-[#A0A3BD]"
                  }`}
                >
                  {label}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mt-2">
              <Link
                href={`/stories/${id}`}
                className="text-[#7750F1] grid place-content-center text-label-lg font-semibold rounded-[10px] bg-[#E8E9FF] h-12 text-center flex-1 transition-all duration-250 ease-in-out hover:bg-[#cfd1ff]"
              >
                View
              </Link>
              <button className="bg-[#FAFAFA] rounded-[10px] h-12 px-4 grid place-content-center">
                <Image
                  src="/icons/hor-dots.png"
                  alt="Horizontal kebab Menu"
                  width={28}
                  height={8}
                  className="w-4 sm:w-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
