import React from "react"
import { twMerge } from "tailwind-merge"

interface MainHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
}

export function MainHeading({ ...props }: MainHeadingProps) {
  return (
    <h2
      {...props}
      className={twMerge("text-heading text-2xl font-black leading-none", props.className)}
    >
      {props.children}
    </h2>
  )
}
