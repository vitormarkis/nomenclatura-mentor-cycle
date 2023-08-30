import React from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

export function Input({ type = "text", ...props }: InputProps) {
  return (
    <input
      {...props}
      type="text"
      className={twMerge(
        `
        border-ring-base
        bg-background
        focus:outline-ring-strong
        placeholder:text-color-soft
        text-color-strong
        `,
        "border rounded-lg h-11 px-4 w-full outline-none focus:outline-offset-2 focus:outline-1",
        props.className
      )}
    />
  )
}
