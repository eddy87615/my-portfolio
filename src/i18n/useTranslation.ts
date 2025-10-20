'use client'

import { useState, useEffect } from 'react'
import { useLanguageStore } from '@/store/languageStore'
import { translations } from './translations'

export function useTranslation() {
  const language = useLanguageStore((state) => state.language)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 在 hydration 完成前使用預設語言
  if (!mounted) {
    return translations['zh']
  }

  return translations[language]
}
