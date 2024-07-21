import Link from "next/link";
import FeaturedCard from "@/components/FeaturedCard";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-screen-xl pr-4 pt-8 sm:pr-6 sm:pt-12 lg:pr-16 lg:pt-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="max-w-lg ">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              You do the business, we’ll handle the money.{" "}
            </h2>

            <p className="mt-4 text-white">
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded bg-[#9DEDF0] px-12 py-3 text-sm font-medium transition hover:bg-[#7DE7EB] shadow-featured-card"
            >
              Get Started
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <FeaturedCard
              imageSrc={"/icons/star.svg"}
              title="Rewards"
              desc="The best credit cards offer some tantalizing combinations of promotions and prizes"
            />
            <FeaturedCard
              imageSrc="/icons/shield.svg"
              title="100% Secured"
              desc="We take proactive steps make sure your information and transactions are secure."
              index={2}
            />
            <FeaturedCard
              imageSrc="/icons/send.svg"
              title="Balance Transfer"
              desc="A balance transfer credit card can save you a lot of money in interest charges."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
