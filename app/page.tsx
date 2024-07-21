import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Solution from "@/components/Solution";
import Testimonial from "@/components/Testimonial";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <main className="pl-4 md:pl-6 md:pr-0 lg:pl-16 w-full">
        {/* HERO SECTION */}
        <Hero />
        {/* ABOUT SECTION*/}
        <About />
        {/* FEATURES SECTION*/}
        <Features />
        {/* SOLUTION SECTION*/}
        <Solution />
        {/* TESTIMONIALS SECTION*/}
        <Testimonial />
        {/* PARTNERS SECTION*/}
        <Partners />
      </main>
    </>
  );
}
