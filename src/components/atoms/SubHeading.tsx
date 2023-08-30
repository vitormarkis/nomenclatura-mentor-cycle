import React from "react"
import { twMerge } from "tailwind-merge"

interface SubHeadingProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
}

export function SubHeading({ ...props }: SubHeadingProps) {
  return (
    <strong
      {...props}
      className={twMerge("text-heading-sub text-sm font-medium mb-4", props.className)}
    >
      {props.children}
    </strong>
  )
}
