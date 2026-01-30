


import { Star } from "lucide-react";
import TestimonialStats from "./TestimonialsStats";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import MarqueeRow from "@/app/common/marque";
import { BadgePill } from "../ui/badgePill";
import { HighlightText } from "../ui/highlight-text";


const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Kumar Groceries, Delhi",
    image: "https://i.pravatar.cc/100?img=12",
    message:
      "Z-Mart transformed my small grocery store. I now reach customers I never could before. Sales increased by 60% in just 3 months!",
  },
  {
    name: "Priya Sharma",
    role: "Fashion Hub, Mumbai",
    image: "https://i.pravatar.cc/100?img=47",
    message:
      "Finally, a platform that understands local businesses. The setup was easy, and customer support is amazing. Highly recommend!",
  },
  {
    name: "Anita Desai",
    role: "Regular Customer",
    image: "https://i.pravatar.cc/100?img=32",
    message:
      "As a customer, I love supporting local shops while enjoying online convenience. Delivery is super fast and products are always fresh!",
  },
  {
    name: "Amit Patel",
    role: "Tech Fix, Bangalore",
    image: "https://i.pravatar.cc/100?img=59",
    message:
      "My electronics repair shop got a new life with Z-Mart. Customers can now book repairs online and I manage everything from my phone.",
  },
  {
    name: "Vikram Singh",
    role: "Tech Professional",
    image: "https://i.pravatar.cc/100?img=15",
    message:
      "The personal touch of local shopping with digital convenience – that's Z-Mart! I discovered so many hidden gems in my neighborhood.",
  },
  {
    name: "Meera Reddy",
    role: "Sweet Delights, Chennai",
    image: "https://i.pravatar.cc/100?img=22",
    message:
      "Running my bakery became so much easier. Orders come in digitally, and I can focus on what I do best – baking delicious treats!",
  },
];


const Testimonials = () => {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="bg-sky-50 py-16 overflow-hidden">
      <div className="max-w-9xl mx-auto px-16">
        {/* Header */}
        <div className="text-center mb-14">
       <BadgePill >
         💬 Success Stories
       </BadgePill>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What's Our  <HighlightText>Community Says</HighlightText>
          </h2>

          <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
            Real stories from shop owners and customers who are part of the
            Z-Mart revolution
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-10 overflow-hidden">
          <MarqueeRow items={firstRow} direction="left" />
          <MarqueeRow items={secondRow} direction="right" />
        </div>

        {/* Stats */}
        <div className="mt-20">
          <TestimonialStats />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
