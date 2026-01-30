import { Badge } from "lucide-react";
import { BadgePill } from "../ui/badgePill";

const faqs = [
  {
    question: "How does Z-Mart work?",
    answer:
      "Z-Mart connects local shops with nearby customers through our platform. Shops create profiles, list products, and customers discover them based on location. Orders are placed digitally and fulfilled by the shops.",
  },
  {
    question: "Is it free to join as a shop owner?",
    answer:
      "Yes! You can start with our free Starter plan. We only charge a small commission on successful orders. There are no setup fees or hidden charges.",
  },
  {
    question: "How do customers find my shop?",
    answer:
      "Customers search by location and category. Our algorithm shows nearby shops first. You can also use our marketing tools to promote your shop and appear in featured listings.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major payment methods including UPI, credit/debit cards, net banking, and cash on delivery. Payments are secure and processed instantly.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Shop owners can choose to handle delivery themselves or use our partner delivery services. Customers can also opt for in-store pickup.",
  },
  {
    question: "Can I manage my shop from mobile?",
    answer:
      "Absolutely! Our mobile app lets you manage inventory, respond to customers, process orders, and track sales from anywhere, anytime.",
  },
];

const FaqPage = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
         

          <BadgePill>
            ❓ FAQ
          </BadgePill>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know
            about Z-Mart.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
