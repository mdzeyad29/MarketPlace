import Image from "next/image";
import { BadgePill } from "../ui/badgePill";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";


const steps = [
  {
    step: 1,
    title: "Discover Local Shops",
    description:
      "Enter your location or enable GPS to find shops near you. Browse through categories like groceries, electronics, fashion, and more.",
    image: "/how1.jpeg",
  },
  {
    step: 2,
    title: "Explore & Connect",
    description:
      "View shop profiles, check product catalogs, read reviews, and chat directly with shop owners. Ask questions and get instant responses.",
    image: "/how2.jpeg",
  },
  {
    step: 3,
    title: "Order & Receive",
    description:
      "Place your order with flexible payment options. Choose home delivery or pickup and get products quickly from nearby shops.",
    image: "/how3.jpeg",
  },
];


const HowitsWorkPage = () => {
  return (

    //  <section className="relative bg-white  lg:p-20"></section>
    <div className="relative bg-white  lg:p-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <BadgePill>
          💡 Simple Process
        </BadgePill>

           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How Z-Mart Works
        </h2>


        <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
          Three simple steps to connect with your local community and discover
          amazing shops nearby.
        </p>

      </div>


      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item) => (
          <Card
            key={item.step}
            className="relative rounded-2xl border border-gray-100 transition hover:shadow-lg"
          >
            {/* Step Number */}
            <div className="absolute -top-6 left-1 flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
              {item.step}
            </div>

            {/* Image */}
            <CardContent className="pt-0">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="h-48 w-full object-cover"
                />
              </div>
            </CardContent>

            {/* Text Content */}
            <CardHeader className="gap-3">
              <CardTitle className="text-lg font-semibold text-gray-900">
                {item.title}
              </CardTitle>

              <CardDescription className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default HowitsWorkPage;