import Image from "next/image";
import React from "react";

type ArticleCardProps = {
  title: string;
  label: string;
  description: string;
  chips: string[];
  image: string;
  author: string;
  time: string;
  category: string;
};

export default function ArticleCard({
  title,
  image,
  label,
  description,
  chips,
  author,
  time,
  category,
}: ArticleCardProps) {
  return (
    <div className="bg-white rounded-[2rem] w-fit p-4 sm:p-5">
      <div>
        <Image
          src={image}
          alt={`${category} Image`}
          width={300}
          height={228}
          className="rounded-2xl w-full aspect-video  object-cover"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-y-2.5 sm:items-center justify-between my-4">
        <div className="flex items-center">
          <p className="uppercase text-title-lg font-extrabold text-[#9058FF]">
            {category}
          </p>
          <div className="size-1.5 rounded-full bg-[#D9D9D9] ml-1.5 mr-2.5" />
          <p className="text-[#A0A3BD] text-title-lg font-semibold">{time}</p>
        </div>

        <div className="flex gap-2.5 items-center ">
          <div className="capitalize max-sm:grid hidden place-content-center px-5 py-2 bg-[#E3D5FF] text-[#7950F2] rounded-md text-label-sm2">
            {label} by
          </div>
          <div>
            <Image
              src="/icons/marie.png"
              alt="Marie Doe Profile Picture"
              width={30}
              height={30}
            />
          </div>
          <span className="text-black text-title-lg font-semibold">
            Marie Doe
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <div>
          <h3 className="text-[#22285E] text-body-lg ">
            {title.length > 29 ? title.slice(0, 25).concat("...") : title}
          </h3>
          <p className="text-[#A0A3BD] text-label-sm2 font-normal">
            {description}
          </p>
        </div>

        <div
          className={`capitalize hidden sm:grid place-content-center px-3 h-8 rounded-md text-label-sm font-semibold ${
            label === "created"
              ? "bg-[#E3D5FF] text-[#7950F2]"
              : "bg-[#E4FFF8] text-[#0DAD82]"
          }`}
        >
          {label}
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-2 mb-4">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="rounded-md h-8 px-4 grid place-content-center text-[#A0A3BD] text-label-sm2 bg-[#F8FAFB]"
          >
            <p>{chip}</p>
          </div>
        ))}
        {/* <div className="rounded-md h-8 sm:h-10 px-5 grid place-content-center text-[#A0A3BD] text-label-md bg-[#F8FAFB]">
          <p>Communication</p>
        </div>
        <div className="rounded-md h-8 sm:h-10 px-5 grid place-content-center text-[#A0A3BD] text-label-md bg-[#F8FAFB]">
          <p>Branding</p>
        </div> */}
      </div>

      <div className="flex items-center justify-between gap-3 mt-2">
        <button className="text-[#7750F1] text-label-lg font-semibold rounded-[10px] bg-[#E8E9FF] h-12 text-center flex-1 transition-all duration-250 ease-in-out hover:bg-[#cfd1ff]">
          Visit
        </button>
        <button className="bg-[#FAFAFA] rounded-[10px] h-12 px-4 grid place-content-center">
          <span className="material-symbols-rounded text-[#7750F1]">
            more_vert
          </span>
        </button>
      </div>
    </div>
  );
}
