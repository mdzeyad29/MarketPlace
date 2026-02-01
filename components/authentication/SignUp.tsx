"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const searchParams = useSearchParams();
  const initialRole =
    (searchParams.get("role") as "customer" | "shopkeeper") || "customer";

  const [role, setRole] = useState<"customer" | "shopkeeper">(initialRole);

  return (
    <section className="flex min-h-screen items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Create your Z-Mart account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign up as {role === "customer" ? "Customer" : "Shop Owner"}
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
            Shop Owner
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>

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

          {/* Extra fields for Shop Owner */}
          {role === "shopkeeper" && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Shop Name
                </label>
                <input
                  type="text"
                  placeholder="Your shop name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

             
            </>
          )}

           <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                Location
                </label>
                <input
                  type="text"
                  placeholder="City / Area"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

          {/* Hidden role */}
          <input type="hidden" name="role" value={role} />

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-sky-500 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-sky-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
