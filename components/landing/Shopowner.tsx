import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { HighlightText } from "../ui/highlight-text";
import { Button } from "../ui/button";

const features = [
  {
    title: "Quick Setup in Minutes",
    desc: "Create your shop profile, add products, and start accepting orders within 15 minutes. No technical knowledge required.",
  },
  {
    title: "Reach More Customers",
    desc: "Get discovered by customers actively searching for products in your area. Expand beyond foot traffic.",
  },
  {
    title: "Manage Everything Mobile",
    desc: "Update inventory, respond to customers, and process orders from your smartphone anytime, anywhere.",
  },
];

const stats = [
  { label: "Zero", value: "Commission on First 100 Orders", color: "text-sky-600" },
  { label: "24/7", value: "Shop Visibility & Support", color: "text-green-600" },
  { label: "Free", value: "Marketing & Promotion Tools", color: "text-purple-600" },
  { label: "100%", value: "Control Over Your Business", color: "text-orange-600" },
];

const ForShopOwnerPage = () => {
  return (

    // <section className="relative bg-white py-16 sm:py-20 lg:py-24">

   <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">    
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/ForShopkeeper.jpeg"
              alt="Shop owner managing store"
              width={520}
              height={380}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
              🏪 For Shop Owners
            </span>

            {/* <h2 className=" text-3xl font-extrabold text-gray-900 sm:text-4xl  lg:px-4"> */}
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Grow Your Local {" "}
              <HighlightText >Business Online</HighlightText> 
            </h2>

            <p className="mt-4 text-gray-600">
              Join thousands of local shops already thriving on Z-Mart. Get
              discovered by nearby customers, manage orders digitally, and grow
              your business without losing the personal touch.
            </p>

            {/* Feature List */}
            <ul className="mt-6 space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-sky-500" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button className="mt-8 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600">
              Register Your Shop →
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <p className={`text-2xl font-bold ${item.color}`}>
                {item.label}
              </p>
              <p className="mt-2 text-sm text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForShopOwnerPage;
