import React from "react"
import { twMerge } from "tailwind-merge"

interface IconToggleLeftProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export default function IconToggleLeft({ size = 16, ...props }: IconToggleLeftProps) {
  return (
    <svg
      className={twMerge("", props.className)}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect
        width={256}
        height={256}
        fill="none"
      />
      <rect
        x={16}
        y={64}
        width={224}
        height={128}
        rx={64}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <circle
        cx={80}
        cy={128}
        r={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
    </svg>
  )
}
