import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-sky-50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back to Z-Mart
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Login to manage your account and orders
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
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

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-sky-500 focus:ring-sky-400"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="font-medium text-sky-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-sky-500 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-600"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social Login */}
        <button className="w-full rounded-full border border-gray-300 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
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
