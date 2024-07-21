import React from "react";
import TestimonialsCard from "@/components/TestimonialsCard";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className=" flex flex-col lg:flex-row justify-between items-center w-full pr-4 sm:pr-6 lg:pr-16">
        <h2
          className="text-3xl font-medium lg:font-semibold text-white sm:text-5xl max-w-lg text-center lg:text-start"
          style={{ lineHeight: "1.325" }}
        >
          What people are saying about us{" "}
        </h2>

        <p className=" max-w-sm leading-relaxed text-white/70 text-center lg:text-start">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl pr-4 pt-12 sm:pr-6 lg:pr-16 lg:pt-16">
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <TestimonialsCard index={1} />
          <TestimonialsCard />
          <TestimonialsCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
