import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center font-bold tracking-tight",
        "text-lg sm:text-xl md:text-2xl",
        "whitespace-nowrap",
        className
      )}
    >
      <span className="text-sky-500">Z</span>
<span className="ml-1 text-gray-900 dark:text-gray-100">-Mart</span>
    </Link>
  )
}
