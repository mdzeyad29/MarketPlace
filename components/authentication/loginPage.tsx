"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/app/store/auth.store";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [role, setRole] = useState<"customer" | "shopkeeper">("customer");

   const login = useAuthStore((state) => state.login);
  const router = useRouter();


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ❗ page reload roko

    // 🔹 mock user (later API se aayega)
    const user = {
      id: Date.now().toString(),
      email: "test@example.com",
      role,
    };

    // ✅ Zustand store me save
    login(user);

    // ✅ Role based redirect
    if (role === "shopkeeper") {
      router.push("/dashboard?role=shopkeeper");
    } else {
      router.push("/dashboard?role=customer");
    }
  };


  return (
    <section className="flex min-h-screen items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back to Z-Mart
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Login as {role === "customer" ? "Customer" : "ShopKeeper"}
          </p>
        </div>

        {/* Persona Switch */}
        <div className="mb-6 flex rounded-full bg-gray-100 p-1">
          <button
            onClick={() => setRole("customer")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
              role === "customer"
                ? "bg-white text-sky-600 shadow"
                : "text-gray-500"
            }`}
          >
            Customer
          </button>

          <button
            onClick={() => setRole("shopkeeper")}
            className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
              role === "shopkeeper"
                ? "bg-white text-sky-600 shadow"
                : "text-gray-500"
            }`}
          >
            ShopKeeper
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5"  onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>

          

          {/* Hidden role field (important) */}
          <input type="hidden" name="role" value={role} />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-sky-500 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600"
          >
            Login as {role === "customer" ? "Customer" : "Shop Owner"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href={`/signup?role=${role}`}
            className="font-medium text-sky-600 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
