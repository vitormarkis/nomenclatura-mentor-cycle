import React from "react"
import { twMerge } from "tailwind-merge"

const styles = {
  normal: twMerge(
    "bg-background-base text-fore-strong",
    "border border-ring-base",
    "hover:bg-background-shadow"
  ),
  outlined: twMerge(
    "bg-transparent text-background-base",
    "border border-ring-base",
    "hover:bg-background-base/10"
  ),
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  styleType?: keyof typeof styles
}

export default function Button({ styleType = "normal", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "h-12 px-8 w-full flex items-center justify-center gap-2 rounded-lg",
        "outline-none focus:outline-1 focus:outline-offset-2 focus:outline-ring-strong",
        styles[styleType],
        props.className
      )}
    >
      {props.children}
    </button>
  )
}
