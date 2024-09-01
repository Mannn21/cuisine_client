import { create } from "zustand";

type Theme = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const useThemeStore = create<Theme>(set => ({    
    theme: 'light',
    toggleTheme: () => set(state => ( { theme: state.theme === 'light' ? 'dark' : 'light'  } ))
}));