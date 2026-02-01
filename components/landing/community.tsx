import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { HighlightText } from "../ui/highlight-text";

const benefits = [
  {
    title: "Real-time Inventory",
    desc: "See what's actually available in shops right now, no more disappointments.",
  },
  {
    title: "Support Local Economy",
    desc: "Every purchase directly helps your neighborhood businesses thrive.",
  },
  {
    title: "Personal Relationships",
    desc: "Build trust with shop owners who know you and care about your needs.",
  },
  {
    title: "Faster Delivery",
    desc: "Get your orders in hours, not days, from shops just around the corner.",
  },
];

const Community = () => {
  return (
    <section className="relative bg-white  lg:p-10">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 md:px-6 lg:px-6">

        <div className="grid items-center gap-12 rounded-3xl bg-white p-10 shadow-lg lg:grid-cols-2">
          <div>
            <h2 className=" font-bold leading-tight text-gray-900  
                 lg:text-4xl
          ">
              Built for Your
              <HighlightText>
                Community
              </HighlightText>
            </h2>

            <ul className="mt-6 space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/how4.jpeg"
              alt="Local community market"
              width={520}
              height={360}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
