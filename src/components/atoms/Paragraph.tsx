import React from "react"
import { twMerge } from "tailwind-merge"

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
}

export function Paragraph({ ...props }: ParagraphProps) {
  return (
    <p
      {...props}
      className={twMerge("leading-normal", props.className)}
    >
      {props.children}
    </p>
  )
}
