import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section id="features">
      <div className="mx-auto max-w-screen-xl pr-4 pt-8 sm:pr-6 sm:pt-12 lg:pr-16 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              alt="payment"
              src={"/images/payment.svg"}
              width={450}
              height={450}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="lg:py-24 flex flex-col justify-center items-center lg:items-start">
            <h2
              className="text-3xl font-semibold sm:text-5xl text-white max-w-2xl text-center lg:text-start"
              style={{ lineHeight: "1.625" }}
            >
              Easily control your billing & invoicing.
            </h2>

            <p className="mt-4  max-w-md text-white/70 text-center lg:text-start">
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>

            <div className="flex gap-2 items-center mt-3">
              <Image
                src={"/images/appstore.svg"}
                width={143}
                height={42}
                alt="appstore"
              />
              <Image
                src={"/images/playstore.svg"}
                width={130}
                height={42}
                alt="playstore"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
