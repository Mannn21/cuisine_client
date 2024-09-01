"use client"

import { useThemeStore } from "@/store/themeStore"

export default function Home () {
  const { toggleTheme, theme } = useThemeStore();

  // console.log({ theme })
  
  return (
    <div className="bg-light-background dark:bg-dark-background">
      <h1 className="text-light-primaryText dark:text-dark-primaryText">
        Hello World
      </h1>
      <button onClick={() => toggleTheme()} className="text-light-primaryText bg-light-buttonBg hover:bg-light-accent dark:text-dark-primaryText dark:bg-dark-buttonBg dark:hover:bg-dark-accent">
        Change Theme
      </button>
    </div>
  )
}