import React from "react"
import { twMerge } from "tailwind-merge"

interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Example({ ...props }: ExampleProps) {
  return (
    <div
      {...props}
      className={twMerge(
        "max-w-[60rem]",
        props.className,
        `
        bg-background-base
        border
        border-ring-base
        text-fore-ground
        `
      )}
    >
      {props.children}
    </div>
  )
}
