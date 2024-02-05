import React from "react";
import Image from "next/image";
import Link from "next/link";

import { StoriesData } from "@/utils/storiesData";

export default function Stories({ params }: { params: { id: string } }) {
  const story = StoriesData[Number(params.id)];
  return (
    <main className=" lg:pl-[280px] pt-28 sm:pt-32 lg:pt-32 pb-12">
      <div className="grid gap-7 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          <div className="flex flex-col xl:flex-row sm:items-center gap-2 xl:gap-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/james.png"
                alt="James Profile Picture"
                width={30}
                height={30}
              />
              <div>
                <p className="text-[#A0A3BD] text-label-sm2 sm:text-title-md">
                  James Robert
                </p>
                <p className="block xl:hidden text-[#58A4FF] text-label-xs font-semibold">
                  <span className="capitalize">{story.label}</span> by{" "}
                  {story.author}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#58A4FF] hidden xl:block text-label-xs font-semibold sm:text-title-md">
                <span className="capitalize">{story.label}</span> by{" "}
                {story.author}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="hidden sm:flex gap-2.5 px-4 text-[#212121] text-label-lg font-semibold items-center rounded-[10px] h-12 justify-center bg-[#FAFAFA] transition-all duration-250 ease-in-out hover:bg-[#fff2f2]">
              Accessibility
              <Image
                src="/icons/arrow-down.png"
                alt="Expand More Icon"
                width={12}
                height={9}
                className="w-2.5"
              />
            </button>
            <button className="bg-[#FAFAFA] rounded-[10px] h-12 px-4 grid place-content-center transition-all duration-250 ease-in-out hover:bg-[#fff2f2]">
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

        <section className="relative max-lg:h-[450px] max-w-screen-lg mx-auto w-full">
          <Image
            src="https://images.unsplash.com/photo-1622140739492-f82f386260b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Container Image"
            width={500}
            height={300}
            className="hidden lg:block w-full blur-sm rounded-2xl opacity-75"
          />
          <div className="hidden lg:block absolute inset-0 rounded-2xl w-full z-10 h-full bg-gradient-to-b from-black/15 to-black/90" />

          <div className="absolute z-20 rounded-2xl sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 overflow-hidden h-full lg:p-4 max-md:w-full">
            <div className="h-full w-full">
              <Image
                src={story.image}
                alt="Container Image"
                width={425}
                height={200}
                className="aspect-[2/3] w-full h-full object-cover rounded-2xl "
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-4 lg:p-8">
              <div className="flex justify-center gap-1">
                <div className="first:bg-white w-12 h-1 rounded-sm" />
                <div className="w-12 h-1 rounded-sm bg-gray-300" />
                <div className="w-12 h-1 rounded-sm bg-gray-300" />
              </div>

              <div className="space-y-4">
                <h1 className="text-display-md xl:text-display-lg text-white">
                  {story.title}
                </h1>
                <button className="capitalize text-[#7750F1] grid place-content-center text-label-md sm:text-label-lg font-semibold rounded-[10px] bg-[#E8E9FF] h-10 sm:h-12 text-center px-4 sm:px-6 transition-all duration-250 ease-in-out hover:bg-[#cfd1ff]">
                  {story.category}
                </button>
              </div>
            </div>
          </div>

          <button className="absolute z-20 max-md:-bottom-16 max-md:right-0 md:top-1/2 md:-translate-y-1/2 md:right-[15%] xl:right-[20%] bg-[#212121] h-12 rounded-[10px] transition-all duration-250 ease-in-out hover:bg-zinc-950 px-4 grid place-content-center">
            <Image
              src="/icons/arrow.png"
              alt="Next Button Arrow"
              width={15}
              height={26}
              className="w-2"
            />
          </button>

          <button className="absolute z-20 max-md:-bottom-16 max-md:right-12  md:top-1/2 md:-translate-y-1/2 md:left-[15%] xl:left-[20%] bg-[#212121] h-12 rounded-[10px] transition-all duration-250 ease-in-out hover:bg-zinc-950 px-4 grid place-content-center">
            <Image
              src="/icons/arrow.png"
              alt="Next Button Arrow"
              width={15}
              height={26}
              className="w-2 rotate-180"
            />
          </button>
        </section>
      </div>

      <div className="absolute left-4 sm:left-6 top-[4.5rem] sm:top-20 lg:hidden">
        <Link className="flex gap-2.5 items-center" href="..">
          <Image
            src="/icons/back.png"
            alt="Back Button Icon"
            width={24}
            height={13}
            className="w-4"
          />
          <h3 className="text-[#1D1D1B] text-label-lg font-semibold ">
            Stories
          </h3>
        </Link>
      </div>
    </main>
  );
}
