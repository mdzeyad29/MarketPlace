import * as React from "react"
import { cn } from "@/lib/utils"

export interface HighlightTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const HighlightText = React.forwardRef<
  HTMLSpanElement,
  HighlightTextProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-semibold text-sky-500  uppercase px-2 py-1  font-extrabold  ",
      className
    )}
    {...props}
  />
))

HighlightText.displayName = "HighlightText"

export { HighlightText }
