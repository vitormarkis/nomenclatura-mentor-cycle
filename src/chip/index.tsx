import React from "react"
import { twMerge } from "tailwind-merge"

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  text?: string
}

export default function Chip({ text, ...props }: ChipProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "flex-1 min-w-min grid place-items-center relative bg-gradient-to-b from-background-base to-middleground-shadow text-fore-ground h-8 rounded-[var(--rounded)] overflow-hidden px-4",
        props.className
      )}
    >
      <div className="absolute inset-[calc(var(--border-width))] rounded-[calc(var(--rounded)_-_var(--border-width))] bg-gradient-to-r from-middleground-base to-fore-accent" />
      <span className="relative">{text}</span>
    </div>
  )
}
