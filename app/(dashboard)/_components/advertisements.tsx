import Image from "next/image";
import React from "react";

type AdvertisementProps = {
  title: string;
  image: string;
  label: string;
};

export default function Advertisements({
  title,
  image,
  label,
}: AdvertisementProps) {
  return (
    <div
      key={title}
      className="flex flex-col sm:flex-row gap-3 bg-white rounded-[20px] overflow-hidden shadow-card-shadow"
    >
      <Image
        src={image}
        alt="Advertisement One"
        width={125}
        height={212}
        className="object-cover w-full aspect-video"
      />

      <div className="flex flex-col justify-between max-sm:px-4 max-sm:pb-4 sm:py-4 pr-4">
        <h4 className="text-[#22285E] text-display-sm sm:text-label-xl mb-1 sm:mb-3">
          {title}
        </h4>
        <p className="text-[#A0A3BD] text-label-sm font-normal">{label}</p>

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
    </div>
  );
}
