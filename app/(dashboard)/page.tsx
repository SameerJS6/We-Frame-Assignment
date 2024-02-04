import React from "react";
import TopicCard from "./_components/topicCard";
import Advertisements from "./_components/advertisements";

import { TopicData } from "@/utils/topicData";
import { AdvertisementData } from "@/utils/advertisementData";

export default function Home() {
  return (
    <div className="bg-lime-500 px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 sm:pt-28 lg:pt-32">
      <div className="mb-7">
        <h1 className="text-display-xl text-[#212121]">Hello Admin,</h1>
        <p className="text-body-md text-[##A0A3BD]">
          This is what we got you for today
        </p>
      </div>

      <div className="grid gap-4 md:gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-9">
        {TopicData.map((data) => (
          <TopicCard key={data.title} {...data} />
        ))}
      </div>

      <div className="grid gap-4 lg:gap-6">
        <div className="flex items-center justify-between">
          <h4 className="text-display-sm text-[#212121]">Advertisment</h4>
          <button className="text-body-lg h-12 px-3 transition-all duration-250 ease-in-out bg-transparent hover:bg-[#eee5ff] rounded-xl text-[#9058FF]">
            See all
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-9">
          {AdvertisementData.map((data) => (
            <Advertisements key={data.title} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
