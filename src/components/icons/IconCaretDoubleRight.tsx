import React from "react"
import { twMerge } from "tailwind-merge"

interface IconCaretDoubleRightProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export function IconCaretDoubleRight({ size = 16, ...props }: IconCaretDoubleRightProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={twMerge("", props.className)}
      width={size}
      height={size}
    >
      <rect
        width={256}
        height={256}
        fill="none"
      />
      <polyline
        points="56 48 136 128 56 208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <polyline
        points="136 48 216 128 136 208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
