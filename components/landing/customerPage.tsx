import Image from "next/image";
import { CheckCircle, Truck, Heart, Users } from "lucide-react";

const benefits = [
  {
    title: "Trust & Authenticity",
    desc: "From verified local businesses you can trust",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Quick Delivery",
    desc: "Get orders faster from nearby shops",
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Personal Service",
    desc: "Build relationships with local shop owners",
    icon: Heart,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Support Community",
    desc: "Every purchase helps your local economy",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
];

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    review:
      "I love being able to support my local grocery store while shopping from home. The owner even remembers my preferences!",
    rating: 5,
  },
];

const ForCustomerPage = () => {
  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">    
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              🛍️ For Customers
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Shop Local, Shop Smart
            </h2>

            <p className="mt-4 max-w-xl text-gray-600">
              Discover the convenience of online shopping combined with the
              trust and personal service of your neighborhood stores. Support
              local businesses while enjoying modern shopping features.
            </p>

            {/* Benefits Card */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 font-semibold text-gray-900">
                Why Customers Love Z-Mart
              </h3>

              <ul className="space-y-4">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600">
                Start Shopping
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Browse Shops
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* Reviews */}
            {reviews.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>

                <p className="mt-3 text-sm text-gray-600">
                  “{item.review}”
                </p>

                <div className="mt-3 flex text-yellow-400">
                  {"★★★★★"}
                </div>
              </div>
            ))}

            {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 sm:h-72 lg:h-80">
  <Image
    src="/ForCustomer.jpeg"
    alt="Happy customers shopping locally"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 520px"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomerPage;
