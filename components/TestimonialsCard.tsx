import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  index?: number;
}

const TestimonialsCard = ({ index }: TestimonialsCardProps) => {
  return (
    <blockquote
      className={`rounded-lg hover:bg-dark-2   p-6 shadow-3xl sm:p-8 flex flex-col gap-3 ${
        index && "bg-dark-2"
      }`}
    >
      <Image
        src={"/icons/quote_icon.svg"}
        width={25}
        height={25}
        alt="quoteIcon"
      />

      <p className="mt-2 text-white leading-7">
        Money is only a tool. It will take you wherever you wish, but it will
        not replace you as the driver.
      </p>
      <div className="flex items-center gap-4">
        <Image
          width={48}
          height={48}
          className="rounded-full object-cover"
          src="/icons/avatar_1.svg"
          alt="avatar"
        />

        <div className="flex flex-col">
          <h4 className="text-white text-lg">Herman Jensen</h4>
          <p className="text-lg font-medium text-white/70">Founder & Leader</p>
        </div>
      </div>
    </blockquote>
  );
};

export default TestimonialsCard;
