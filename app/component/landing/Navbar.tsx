import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
 <nav className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur">

      <div className="flex items-center justify-between px-14 py-4 sticky top-0 z-50">

        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/">Z-Mart</Link>
        </div>

        {/* Center - Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm  text-gray-600 px-10">
          <li>
            <Link
  href="#features"
  className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
>
  Features
</Link>

          </li>
          <li>
            <Link href="#how" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#shops" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
             Shops
            </Link>
          </li>
          <li>
            <Link href="#customers" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
               Customers
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
        <Button
  size="lg"
  className="rounded-full bg-sky-100 text-sky-700 shadow-md transition-all hover:bg-sky-200 hover:scale-105"
>
  Join Now
</Button>

          <Button
  asChild
  size="lg"
 className="rounded-full bg-sky-400 px-8 font-semibold text-white shadow-md transition-all hover:bg-sky-500 hover:scale-105"

>
  <Link href="/get-started">
    Get Started
  </Link>
</Button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
