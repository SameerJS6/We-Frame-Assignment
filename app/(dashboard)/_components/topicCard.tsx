import React from "react";
import Image from "next/image";

type TopicCardProps = {
  title: string;
  icon: string;
  label: string;
};

export default function TopicCard({ title, label, icon }: TopicCardProps) {
  return (
    <div className="flex gap-3.5 items-center bg-white rounded-[20px] p-4 h-28">
      <div className="rounded-[50%] p-4 bg-[#E8E9FF]">
        <Image src={icon} alt={`${title} Icon`} width={25} height={25} />
      </div>
      <div className="text-[#212121]">
        <h4 className="text-display-sm">{title}</h4>
        <span className="text-body-md">{label}</span>
      </div>
    </div>
  );
}
