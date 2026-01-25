import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HighlightText } from "../ui/highlight-text";
import { BadgePill } from "../ui/badgePill";

const Hero = () => {
  return (
    <section className="relative bg-white  lg:p-20">
      <div className="px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left lg:max-w-xl sm:pb-20">
            {/* Badge */}
            <BadgePill >🚀 Hyperlocal Marketplace Revolution</BadgePill>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl gap-2">
              Bringing Your{" "}
              <HighlightText>Local Shops</HighlightText>
              Online
            </h1>

            {/* Description */}
             <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
            {/* <p className="mt-6 max-w-xl text-lg text-gray-600  md:flex md:items-center md:gap-4 md:text-left"> */}
              Z-Mart connects you with nearby local businesses digitally.
              Discover trusted neighborhood shops, support your community,
              and enjoy a personalized shopping experience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-sky-400 px-8 font-semibold text-white shadow-md transition-all hover:bg-sky-500 hover:scale-105"
              >
                <Link href="/get-started">Explore Local Shops</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-semibold"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-2xl font-bold text-gray-900">5,000+</p>
                <p className="text-sm text-gray-500">Local Shops</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50,000+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-500">Cities</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/heroSectionImage.jpg"
                alt="Local marketplace"
                width={600}
                height={450}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-4 py-3 shadow-lg">
              <p className="flex items-center gap-2 text-sm font-medium text-gray-700">
                ✅ Shop Verified
              </p>
              <p className="text-xs text-gray-500">
                Trusted Local Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
