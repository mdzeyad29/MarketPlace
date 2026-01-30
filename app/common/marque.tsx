
"use client";
import {  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter, } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";


type Testimonial = {
  name: string;
  role: string;
  image: string;
  message: string;
};

type MarqueeRowProps = {
  items: Testimonial[];
  direction?: "left" | "right";
};

const MarqueeRow = ({
  items,
  direction = "left",
}: MarqueeRowProps) => {
  return (
    <motion.div
      className="flex gap-6 w-max"
      animate={{
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      }}
      whileHover={{ animationPlayState: "paused" }}
      whileTap={{ animationPlayState: "paused" }}
    >
      {[...items, ...items].map((item, index) => (
       <Card
  key={index}
  className="min-w-[320px] max-w-[360px] shrink-0 py-4 gap-4 rounded-2xl border-gray-100 hover:shadow-md transition"
>

          <CardHeader className="pb-0">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-gray-600 leading-relaxed">
              “{item.message}”
            </CardDescription>
          </CardContent>

          <CardFooter className="gap-4 pt-4">
            <img
              src={item.image}
              alt={item.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {item.name}
              </p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  );
};

export default MarqueeRow;
