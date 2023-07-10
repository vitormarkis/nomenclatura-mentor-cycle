import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import * as Dialog from "@radix-ui/react-dialog"
import ReactDOM from "react-dom"
import { Atom as A } from "../atoms"
import Button from "../buttons/Button"
import { useLayers } from "../../states/useLayers"

interface SendMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export default function SendMessage({ children, ...props }: SendMessageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { layerSequence } = useLayers()

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
              "max-w-[24rem] w-full z-[10]",
              "bg-background-base border border-ring-base p-6 rounded-lg text-fore-ground",
              layerSequence[0],
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
              <Button className="_action">Confirmar</Button>
            </div>
          </div>
        </Dialog.Content>,
        document.querySelector("#portal")!
      )}
    </Dialog.Root>
  )
}
