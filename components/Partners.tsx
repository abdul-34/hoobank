import React from 'react';
import Image from "next/image"

const Partners = () => {
  return (
    <section
    className=" pr-4 py-8 sm:pr-6 sm:py-12 lg:pr-16 lg:py-16"
    id="partners"
  >
    <div className="flex justify-center sm:justify-between items-center flex-wrap gap-x-5 gap-y-6 mt-6">
      <Image
        src={"/images/airbnb.svg"}
        width={190}
        height={33}
        alt="logo"
      />
      <Image
        src={"/images/binance.svg"}
        width={120}
        height={28}
        alt="logo"
      />
      <Image
        src={"/images/coinbase.svg"}
        width={180}
        height={27}
        alt="logo"
      />
      <Image
        src={"/images/dropbox.svg"}
        width={123}
        height={27}
        alt="logo"
      />
    </div>
  </section>
  );
};

export default Partners;
