import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgePillProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const BadgePill = React.forwardRef<
  HTMLSpanElement,
  BadgePillProps
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full",
      "px-4 py-2 text-sm font-medium",
      "bg-sky-100 text-sky-700",
      "dark:bg-sky-900/30 dark:text-sky-300",
      className
    )}
    {...props}
  >
    {children}
  </span>
))

BadgePill.displayName = "BadgePill"

export { BadgePill }
