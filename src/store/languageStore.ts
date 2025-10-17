import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'zh' | 'jp'

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'zh',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    },
  ),
)
