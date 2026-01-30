import {
  ShoppingCart,
  Laptop,
  Shirt,
  Home,
  Utensils,
  Heart,
  BookOpen,
  Wrench,
} from "lucide-react";
import { BadgePill } from "../ui/badgePill";
import { HighlightText } from "../ui/highlight-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Groceries",
    desc: "Fresh produce, daily essentials",
    shops: "2,345 shops",
    icon: ShoppingCart,
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Electronics",
    desc: "Gadgets, repairs, accessories",
    shops: "876 shops",
    icon: Laptop,
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Fashion",
    desc: "Clothing, accessories, jewelry",
    shops: "1,567 shops",
    icon: Shirt,
    bg: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "Home & Living",
    desc: "Furniture, decor, appliances",
    shops: "934 shops",
    icon: Home,
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Food & Dining",
    desc: "Restaurants, bakeries, cafes",
    shops: "1,234 shops",
    icon: Utensils,
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Health & Beauty",
    desc: "Pharmacy, cosmetics, salon",
    shops: "678 shops",
    icon: Heart,
    bg: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Books & Stationery",
    desc: "Books, office supplies",
    shops: "445 shops",
    icon: BookOpen,
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Services",
    desc: "Repairs, cleaning, maintenance",
    shops: "789 shops",
    icon: Wrench,
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

const ShopCategories = () => {
  return (
    <section className="max-w-8xl mx-auto px-16 py-16">
      {/* Header */}
      <div className="text-center mb-12">

       <BadgePill>
        🛍 Shop Categories
       </BadgePill>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore Local 
          <HighlightText >Shops by Category </HighlightText>
        </h2>
         <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
          From groceries to electronics, fashion to home services – discover all
          types of local businesses near you
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {categories.map((cat, index) => {
    const Icon = cat.icon;

    return (
      <Card
        key={index}
        className={cn(
          "cursor-pointer border-gray-100 transition hover:shadow-md",
          cat.bg // background color stays dynamic
        )}
      >
        {/* Header */}
        <CardHeader>
          {/* Icon */}
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl",
              cat.iconBg
            )}
          >
            <Icon className={cn("h-6 w-6", cat.iconColor)} />
          </div>

          {/* Title */}
          <CardTitle className="text-lg font-semibold text-gray-900">
            {cat.title}
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <CardDescription className="text-sm text-gray-500">
            {cat.desc}
          </CardDescription>

          <p className="mt-3 text-sm font-medium text-blue-600">
            {cat.shops}
          </p>
        </CardContent>
      </Card>
    );
  })}
</div>
    </section>
  );
};

export default ShopCategories;
