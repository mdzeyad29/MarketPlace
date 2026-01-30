const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "4.8", label: "Average Shop Rating" },
  { value: "85%", label: "Repeat Customers" },
  { value: "2.5x", label: "Average Sales Growth" },
];

const TestimonialStats = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md mb-20 mt-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-blue-600">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialStats;
