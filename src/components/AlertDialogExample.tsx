import React from "react"
import { cn } from "../lib/utils"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { Atom } from "./atoms"

export type AlertDialogExampleProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode
}

export const AlertDialogExample = React.forwardRef<
  React.ElementRef<"div">,
  AlertDialogExampleProps
>(function AlertDialogExampleComponent({ children, ...props }, ref) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="_floor absolute inset-0 bg-background/50" />
        <AlertDialog.Content
          {...props}
          className={cn(
            "_floor absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "rounded-md bg-background border p-4",
            props.className
          )}
          ref={ref}
        >
          <AlertDialog.Title asChild>
            <Atom.Heading>Title</Atom.Heading>
          </AlertDialog.Title>
          <AlertDialog.Description asChild>
            <Atom.Paragraph>
              Description Description Description Description Description Description Description
              Description
            </Atom.Paragraph>
          </AlertDialog.Description>
          <div className="flex items-center gap-2 justify-end">
            <AlertDialog.Cancel className="_block _action h-11 px-4 rounded-md bg-background text-color border hover:bg-background-shade">
              Cancel
            </AlertDialog.Cancel>
            <AlertDialog.Action className="_action h-11 px-4 rounded-md bg-background text-color border hover:bg-background-shade">
              Action
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
})

AlertDialogExample.displayName = "AlertDialogExample"
