import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void; //set them to light or dark
  toggleTheme: () => void;         // toggle between light and dark themes
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",                     //set default to light

      setTheme: (theme) => {
        set({ theme });     //update state with new chosen theme

        document.documentElement.classList.toggle(
          "dark",
          theme === "dark",
        );                                 //set DOM to dark or light depending on what theme is current
      },

      toggleTheme: () => {
        set((state) => {                        //Read the current theme
          const newTheme =
            state.theme === "light" ? "dark" : "light";

          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );                                 //user has manually set theme          

          return {
            theme: newTheme,
          };
        });
      },
    }),
    {
      name: "genesis-theme", // unique name for localStorage
    },
  ),
);