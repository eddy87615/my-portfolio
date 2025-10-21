'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Image from 'next/image'

import HomeSwiperLR from '@/components/HomeSwiperLR'
import HomeSwiperTB from '@/components/HomeSwiperTB'

import './Home.css'
import HomeAbout from '@/components/HomeAbout'
import Link from 'next/link'

interface HomeContentProps {
  isAuthenticated: boolean
}

export default function HomeContent({ isAuthenticated }: HomeContentProps) {
  const t = useTranslation()

  return (
    <div className="home">
      <div className="top_kv">
        <div className="kv_wrapper">
          <Image src="/Images/kv-img001.webp" fill alt="kv picture of eddy" />
          <div className="kv_text">
            <h1>{t.home.title}</h1>
            <p>{t.home.content01}</p>
            <p>{t.home.content02}</p>
          </div>
        </div>
      </div>
      <HomeAbout />
    </div>
  )
}
