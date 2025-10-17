'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLanguageStore } from '@/store/languageStore'
import './LanguageSelector.css'

const languages = [
  { code: 'zh', label: '中文', flag: '/images/taiwan.png' },
  { code: 'jp', label: '日本語', flag: '/images/japan.png' },
] as const

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguageStore()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((lang) => lang.code === language)

  const handleSelect = (code: 'zh' | 'jp') => {
    setLanguage(code)
    setIsOpen(false)
  }

  // 點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Image
          src={currentLang?.flag || '/images/taiwan.png'}
          width={20}
          height={20}
          alt={`${currentLang?.label} flag`}
        />
        <span>{currentLang?.label}</span>
        <svg
          className={`arrow ${isOpen ? 'open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <ul className="language-selector-dropdown">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleSelect(lang.code)}
              >
                <Image src={lang.flag} width={20} height={20} alt={`${lang.label} flag`} />
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
