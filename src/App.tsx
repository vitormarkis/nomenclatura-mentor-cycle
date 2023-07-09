import { twMerge } from "tailwind-merge"
import { Example } from "./components/Example"
import { IconCaretDoubleRight } from "./components/icons/IconCaretDoubleRight"
import IconChat from "./components/icons/IconChat"
import { Atom as A } from "./components/atoms"
import IconToggleLeft from "./components/icons/IconToggleLeft"
import { useTheme } from "next-themes"
import IconToggleRight from "./components/icons/IconToggleRight"
import { useState } from "react"
import IconCarrot from "./components/icons/IconCarrot"
import SendMessage from "./components/modal/SendMessage"
import Button from "./components/buttons/Button"

// import resolveConfig from "tailwindcss/resolveConfig"
// import config from "../tailwind.config"

// const fullConfig = resolveConfig(config)
// console.log(fullConfig)

const techs = ["React", "Next", "Node", "PHP"]

export function App() {
  const [emailInput, setEmailInput] = useState("")
  const { theme, setTheme } = useTheme()

  const isInDarkMode = theme == "dark"
  const ThemeIcon = isInDarkMode ? IconToggleLeft : IconToggleRight

  return (
    <div className="_first grid place-items-center min-h-screen">
      <div className="_action">
        <Button onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
          <span className="whitespace-nowrap">Trocar tema</span>
          <ThemeIcon
            size={24}
            className="text-symbol"
          />
        </Button>
      </div>
      <Example className="py-6 flex md:flex-row flex-col m-6 px-6 md:px-0">
        <div
          className={twMerge(
            "flex flex-col gap-4 flex-1",
            "border-b md:border-r md:border-b-0 border-ring-base",
            "md:px-6 pb-6 mb-6 md:pb-0 md:mb-0"
          )}
        >
          <div>
            <A.MainHeading>Guy Hawkins</A.MainHeading>
            <A.SubHeading>UI/UX Director</A.SubHeading>
          </div>
          <div>
            <A.Heading>Introduction</A.Heading>
            <A.Paragraph>
              A skilled designer with a passion for creating visually stunning and user-friendly
              experiences. Combining creativity and technical expertise to bring ideas to life...{" "}
              <span className="font-normal text-fore-support hover:underline hover:cursor-pointer">
                Ver mais
              </span>
            </A.Paragraph>
          </div>
          <div>
            <A.Heading>Current ocupation</A.Heading>
            <A.Paragraph>
              Currently, I am working on designing intuitive mobile app interfaces, creating
              engaging website layouts, and collaborating with clients to develop impactful branding
              strategies...{" "}
              <span className="font-normal text-vitormarkis hover:underline hover:cursor-pointer">
                Ver mais
              </span>
            </A.Paragraph>
          </div>
          <div className="mt-auto">
            <A.Heading className="mb-2">Contact me:</A.Heading>
            <A.Input
              type="email"
              placeholder="yourname@mail.com.br"
              className="_second mb-2 placeholder:text-fore-soft text-fore-strong"
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
            />
            <Button
              className="_secondary"
              styleType="normal"
              disabled={emailInput.length === 0}
            >
              Send
            </Button>
          </div>
        </div>
        <div className={twMerge("flex-1 flex flex-col", "md:px-6")}>
          <div className="mb-6 pb-6 border-b border-ring-base">
            <div className="mb-4">
              <A.Heading>Technologies</A.Heading>
              <A.SubHeading>Some technologies I have been studying</A.SubHeading>
            </div>

            <div className="_second flex gap-3 p-3 rounded-lg bg-background-base">
              <div className="flex flex-wrap gap-3">
                {techs.map(t => (
                  <div
                    className={twMerge(
                      "_third h-8 pl-4 pr-2 flex items-center rounded-full text-fore-ground",
                      "bg-background-base"
                    )}
                  >
                    <span className="whitespace-nowrap">{t}</span>
                    <div
                      className={twMerge(
                        "h-5 w-5 ml-2 grid place-items-center rounded-full hover:cursor-pointer",
                        "hover:bg-background-shadow"
                      )}
                    >
                      <IconCaretDoubleRight
                        size={14}
                        className="text-symbol"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div
                  className={twMerge(
                    "h-9 w-9 ml-2 grid place-items-center rounded-lg hover:cursor-pointer",
                    "hover:bg-background-shadow"
                  )}
                >
                  <IconChat
                    size={24}
                    className="text-symbol"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <div>
              <A.Heading>Nesting</A.Heading>
              <A.Paragraph>
                Não possui a classe <strong>_action</strong>, herda as estilizações do pai
              </A.Paragraph>
              <Button>
                <span className="whitespace-nowrap">Sem _action</span>
                <IconCarrot
                  size={24}
                  className="text-symbol"
                />
              </Button>
            </div>
            <div>
              <A.Paragraph>
                Possui a classe <strong>_action</strong>, possui suas próprias estilizações
              </A.Paragraph>
              <SendMessage>
                <Button
                  styleType={isInDarkMode ? "outlined" : "normal"}
                  className="_action"
                >
                  <span className="whitespace-nowrap">Excluir item</span>
                  <IconCarrot size={24} />
                </Button>
              </SendMessage>
            </div>
          </div>
        </div>
      </Example>
    </div>
  )
}
