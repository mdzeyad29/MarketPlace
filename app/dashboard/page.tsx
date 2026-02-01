"use client";

import { useAuthStore } from "@/app/store/auth.store";
import { useSearchParams } from "next/navigation";

const DashboardPage = () => {
//   const user = useAuthStore((state) => state.currentUser);
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

//   if (!user) {
//     return <p className="p-10">Please login first</p>;
//   }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        {role === "shopkeeper"
          ? "Shopkeeper Dashboard"
          : "Customer Dashboard"}
      </h1>

      <p className="mt-4 text-gray-600">
        Logged in as:
         {/* <strong>{user.email}</strong> */}
      </p>
    </div>
  );
};

export default DashboardPage;
