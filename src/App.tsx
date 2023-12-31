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

const techs = ["React", "Next", "Node", "PHP"]

export function App() {
  const [emailInput, setEmailInput] = useState("")
  const { theme, setTheme } = useTheme()

  const ThemeIcon = theme == "dark" ? IconToggleLeft : IconToggleRight

  return (
    <div className="_first grid place-items-center h-screen">
      <div className="_action">
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
          className={twMerge(
            "h-12 px-8 flex items-center gap-2 rounded-lg my-6",
            "bg-background-base text-fore-ground border border-ring-base hover:bg-background-shadow",
            "outline-none focus:outline-1 focus:outline-offset-2 focus:outline-ring-strong",
            "dark:bg-transparent dark:hover:bg-white/5"
          )}
        >
          <span className="whitespace-nowrap">Trocar tema</span>
          <ThemeIcon
            size={24}
            className="text-symbol"
          />
        </button>
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
              <span className="font-normal text-fore-support hover:underline hover:cursor-pointer">
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
            <button
              className={twMerge(
                "_secondary rounded-lg h-12 px-4 flex items-center justify-center gap-2 w-full",
                "text-fore-ground bg-background-base",
                "hover:bg-background-shadow",
                "disabled:bg-background-opposite disabled:cursor-not-allowed",
                "outline-none focus:outline-1 focus:outline-offset-2 focus:outline-ring-strong"
              )}
              disabled={emailInput.length === 0}
            >
              Send
            </button>
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
              <button
                className={twMerge(
                  "h-12 px-8 w-full flex items-center justify-center gap-2 rounded-lg",
                  "bg-background-base text-fore-ground border border-ring-base hover:bg-background-shadow",
                  "outline-none focus:outline-1 focus:outline-offset-2 focus:outline-ring-strong",
                  "dark:bg-transparent dark:hover:bg-fore-ground/10"
                )}
              >
                <span className="whitespace-nowrap">Sem _action</span>
                <IconCarrot
                  size={24}
                  className="text-symbol"
                />
              </button>
            </div>
            <div>
              <A.Paragraph>
                Possui a classe <strong>_action</strong>, possui suas próprias estilizações
              </A.Paragraph>
              <button
                className={twMerge(
                  "_action h-12 px-8 w-full flex items-center justify-center gap-2 rounded-lg",
                  "bg-background-base text-fore-ground border border-ring-base hover:bg-background-shadow",
                  "outline-none focus:outline-1 focus:outline-offset-2 focus:outline-ring-strong",
                  "dark:bg-transparent dark:hover:bg-fore-ground/10"
                )}
              >
                <span className="whitespace-nowrap">Com _action</span>
                <IconCarrot
                  size={24}
                  className="text-symbol"
                />
              </button>
            </div>
          </div>
        </div>
      </Example>
    </div>
  )
}
