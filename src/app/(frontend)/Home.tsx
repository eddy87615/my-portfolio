'use client'

import { useTranslation } from '@/i18n/useTranslation'

import './Home.css'

interface HomeContentProps {
  isAuthenticated: boolean
}

export default function HomeContent({ isAuthenticated }: HomeContentProps) {
  const t = useTranslation()

  return (
    <div className="home">
      <div className="content">
        {/* {!isAuthenticated && <p>{t.home.welcome}</p>}
        {isAuthenticated && <p>嗨嗨：Ｄ</p>} */}
        <p>{t.home.welcome}</p>
      </div>
    </div>
  )
}
