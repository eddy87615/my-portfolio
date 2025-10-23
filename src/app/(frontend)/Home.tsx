'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Image from 'next/image'
import type { PersonalInfo, Skill } from '@/payload-types'

import './Home.css'
import HomeAbout from '@/components/HomeAbout'
import HomeSkill from '@/components/HomeSkill'
import Link from 'next/link'

interface HomeContentProps {
  isAuthenticated: boolean
  personalInfo: PersonalInfo
  skills: Skill[]
}

const HomeHeader = function () {
  const t = useTranslation()
  return (
    <div className="top_kv">
      <div className="kv_wrapper">
        <Image src="/images/kv-img001.webp" fill alt="kv picture of eddy" />
        <div className="kv_text">
          <h1>{t.home.title}</h1>
          <p>{t.home.content01}</p>
          <p>{t.home.content02}</p>
        </div>
      </div>
    </div>
  )
}

export default function HomeContent({ isAuthenticated, personalInfo, skills }: HomeContentProps) {
  return (
    <div className="home">
      <HomeHeader />
      <HomeAbout personalInfo={personalInfo} />
      <HomeSkill skills={skills} />
    </div>
  )
}
