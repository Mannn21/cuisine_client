// components/ThemeProvider.tsx
"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    console.log(`Current theme: ${theme}`);  // Tambahkan ini untuk debugging
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("Class 'dark' added to document.documentElement");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Class 'dark' removed from document.documentElement");
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
