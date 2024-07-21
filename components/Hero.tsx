import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="pt-8" id="home">
      <div className="max-w-screen-xl mx-auto gap-x-12 items-center justify-between overflow-hidden md:flex">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <div className="flex items-center">
            <Image
              src={"/icons/discount.svg"}
              width={20}
              height={20}
              alt="Discount"
            />
            <p className="text-white">20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
          </div>
          <div className="flex gap-3">
            <h1
              className="text-4xl text-white font-extrabold md:text-5xl "
              style={{ lineHeight: "1.375" }}
            >
              The Next <span className="text-green-2">Generation</span> Payment
              Method
            </h1>
            <Image
              src={"/images/hero-btn.svg"}
              width={140}
              height={140}
              alt="hero-btn"
              className="w-fit h-fit hidden md:block"
            />
          </div>
          <p className="text-white/70">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="flex-none md:max-w-xl">
          <Image
            src={"/images/hero-img.svg"}
            width={520}
            height={520}
            alt="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
