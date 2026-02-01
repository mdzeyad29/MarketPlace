import { Check } from "lucide-react";
import { BadgePill } from "../ui/badgePill";

const plans = [
  {
    title: "STARTER",
    price: "Free",
    subtitle: "Perfect to get started",
    features: [
      "Up to 50 products",
      "Basic shop profile",
      "5% commission per order",
      "Customer messaging",
      "Mobile app access",
    ],
    button: "Get Started Free",
    highlighted: false,
  },
  {
    title: "PROFESSIONAL",
    price: "₹999",
    subtitle: "per month",
    badge: "MOST POPULAR",
    features: [
      "Unlimited products",
      "Enhanced shop profile",
      "3% commission per order",
      "Priority customer support",
      "Advanced analytics",
      "Marketing tools",
      "Featured placement",
    ],
    button: "Start 30-Day Trial",
    highlighted: true,
  },
  {
    title: "ENTERPRISE",
    price: "Custom",
    subtitle: "For large businesses",
    features: [
      "Everything in Professional",
      "Custom commission rates",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "White-label options",
    ],
    button: "Contact Sales",
    highlighted: false,
  },
];

const SubscriptionPlan = () => {
  return (
    <section className="bg-sky-50 py-16 overflow-hidden">
      <div className="max-w-9xl mx-auto px-16">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            💎 Pricing Plans
          </span> */}
          <BadgePill>
            💎 Pricing Plans
          </BadgePill>

           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>

           <p className="mt-6 text-lg font-medium leading-tight text-gray-600 sm:text-5xl md:text-lg lg:text-lg gap-2">
            Choose the plan that fits your business size. No hidden fees, cancel
            anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-xl scale-105"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full text-black">
                  {plan.badge}
                </span>
              )}

              {/* Title */}
              <h3
                className={`text-sm font-semibold ${
                  plan.highlighted ? "text-blue-100" : "text-blue-600"
                }`}
              >
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mt-4 mb-6">
                <p className="text-4xl font-bold">
                  {plan.price}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className={
                        plan.highlighted
                          ? "text-white"
                          : "text-green-600"
                      }
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-white"
                          : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
