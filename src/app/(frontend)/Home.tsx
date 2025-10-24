'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Image from 'next/image'

import './Home.css'
import HomeAbout from '@/components/HomeAbout'
import HomeSkill from '@/components/HomeSkill'

interface PersonalInfo {
  _id: string
  nameZh?: string
  nameEng?: string
  nameJp?: string
  birthdayZh?: string
  birthdayEng?: string
  birthdayJp?: string
  nationalityZh?: string
  nationalityEng?: string
  nationalityJp?: string
  email?: string
  locationZh?: string
  locationEng?: string
  locationJp?: string
  zhContent?: any
  engContent?: any
  jpContent?: any
}

interface Skill {
  _id: string
  name: string
  descriptionZh?: string
  descriptionEng?: string
  descriptionJp?: string
  proficiency: number
  order: number
}

interface HomeContentProps {
  isAuthenticated: boolean
  personalInfo: PersonalInfo | null
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
