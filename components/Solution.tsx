import React from "react";
import Image from "next/image";
import Link from "next/link";

const Solution = () => {
  return (
    <section id="solution">
      <div className="mx-auto max-w-screen-xl pr-4 py-8 sm:pr-6 sm:py-12 lg:pr-16 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg lg:order-last sm:h-80 lg:h-full">
            <Image
              alt="feature_card"
              src={"/images/feature_card.svg"}
              width={450}
              height={450}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="lg:py-24 flex flex-col justify-center items-center lg:items-start">
            <h2
              className="text-3xl font-semibold sm:text-4xl text-white max-w-lg lg:max-w-md text-center lg:text-start"
              style={{ lineHeight: "1.625" }}
            >
              Find a better card deal in few easy steps.{" "}
            </h2>

            <p className="mt-4  max-w-md text-white/70 text-center lg:text-start">
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded bg-[#9DEDF0] px-12 py-3 text-sm font-medium transition hover:bg-[#7DE7EB] shadow-featured-card"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
