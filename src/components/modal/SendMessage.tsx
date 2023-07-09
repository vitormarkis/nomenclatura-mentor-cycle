import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import * as Dialog from "@radix-ui/react-dialog"
import ReactDOM from "react-dom"
import { Atom as A } from "../atoms"
import Button from "../buttons/Button"
import { useTheme } from "next-themes"

interface SendMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export default function SendMessage({ children, ...props }: SendMessageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { theme } = useTheme()

  const isInDarkMode = theme == "dark"

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen)

  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      {ReactDOM.createPortal(
        <Dialog.Content className="fixed inset-0 grid place-items-center">
          <Dialog.Overlay
            onClick={toggleModal}
            className="fixed inset-0 bg-black/50 dark:bg-black/70"
          />
          <div
            {...props}
            className={twMerge(
              "_first max-w-[24rem] w-full z-[10]",
              "bg-background-base border border-ring-base p-6 rounded-lg text-fore-ground",
              props.className
            )}
          >
            <A.Heading>Excluir item</A.Heading>
            <A.SubHeading>
              Tem certeza que deseja excluir este item? Após a exclusão não há como reverter.
            </A.SubHeading>
            <div className="flex gap-2">
              <Button
                styleType="outlined"
                className="_opposite"
              >
                Cancelar
              </Button>
              <Button
                styleType={isInDarkMode ? "outlined" : "normal"}
                className="_action"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </Dialog.Content>,
        document.querySelector("#portal")!
      )}
    </Dialog.Root>
  )
}
