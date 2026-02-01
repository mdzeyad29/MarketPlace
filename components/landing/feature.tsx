import {
  MapPin,
  ShieldCheck,
  MessageCircle,
  Store,
  Star,
  Truck,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BadgePill } from "../ui/badgePill";
import { HighlightText } from "../ui/highlight-text";

const features = [
  {
    title: "Hyperlocal Discovery",
    description:
      "Find shops in your neighborhood within minutes. Our intelligent location-based search connects you with nearby businesses instantly.",
    icon: MapPin,
    bg: "bg-sky-50",
    iconBg: "bg-sky-500",
    linkColor: "text-sky-600",
  },
  {
    title: "Verified Local Shops",
    description:
      "Every shop is verified and authenticated. Shop with confidence knowing you’re dealing with legitimate local businesses.",
    icon: ShieldCheck,
    bg: "bg-purple-50",
    iconBg: "bg-purple-500",
    linkColor: "text-purple-600",
  },
  {
    title: "Direct Communication",
    description:
      "Chat directly with shop owners. Ask questions, negotiate prices, and build relationships with local merchants.",
    icon: MessageCircle,
    bg: "bg-green-50",
    iconBg: "bg-green-500",
    linkColor: "text-green-600",
  },
  {
    title: "Shop-First Approach",
    description:
      "Browse by shops, not just products. Discover the unique offerings of each local business and their complete inventory.",
    icon: Store,
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
    linkColor: "text-orange-600",
  },
  {
    title: "Reviews & Ratings",
    description:
      "Read authentic reviews from your neighbors. Make informed decisions based on real community feedback.",
    icon: Star,
    bg: "bg-pink-50",
    iconBg: "bg-pink-500",
    linkColor: "text-pink-600",
  },
  {
    title: "Flexible Delivery",
    description:
      "Choose home delivery or in-store pickup. Get your orders quickly from nearby shops with minimal delivery times.",
    icon: Truck,
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-500",
    linkColor: "text-indigo-600",
  },
];

const Feature = () => {
  return (
    <section className="relative bg-white  lg:p-10">
      <div className="px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <BadgePill>⭐  Why Choose Z-Mart</BadgePill>

             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Features That Empower {" "}
            <HighlightText>Local Commerce</HighlightText>
          </h2>
          <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
            Built specifically for hyperlocal discovery, Z-Mart bridges the gap
            between traditional shopping and digital convenience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`rounded-2xl border border-gray-100 transition hover:shadow-lg ${feature.bg}`}
              >
                <CardHeader className="flex flex-col items-center gap-3  text-center">
                  {/* Icon */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-white ${feature.iconBg}`}
                  >
                    <feature.icon size={18} />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </CardDescription>

                  <button
                    className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${feature.linkColor}`}
                  >
                    Learn more →
                  </button>
                </CardContent>
              </Card>


            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
