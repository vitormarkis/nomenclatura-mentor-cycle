import React from "react"
import { twMerge } from "tailwind-merge"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export function Heading({ ...props }: HeadingProps) {
  return (
    <h3
      {...props}
      className={twMerge("text-heading-soft font-semibold leading-none mb-0.5", props.className)}
    >
      {props.children}
    </h3>
  )
}
