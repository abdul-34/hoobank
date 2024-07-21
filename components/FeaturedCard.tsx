import Image from "next/image";
import React from "react";

interface FeaturedCardProps {
  imageSrc: string;
  title: string;
  desc: string;
  index?: number;
}

const FeaturedCard = ({ imageSrc, title, desc, index }: FeaturedCardProps) => {
  return (
    <div
      className={`flex gap-4 rounded-xl p-4 shadow-featured-card hover:bg-dark-2 ${
        index && "bg-dark-2"
      } cursor-pointer`}
    >
      <Image src={imageSrc} width={36} height={36} alt="FeaturedCardIcon" />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-white">{title}</h2>

        <p className="hidden sm:mt-1 sm:block sm:text-sm text-white">{desc}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
