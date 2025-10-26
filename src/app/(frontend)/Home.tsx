'use client'

import { useTranslation } from '@/i18n/useTranslation'

import './Home.css'
import HomeAbout from '@/components/HomeAbout'
import HomeSkill from '@/components/HomeSkill'
import HomeWorks from '@/components/HomeWorks'

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
        <div className="kv_text">
          <p className="kv_title_hi">{t.home.title}</p>
          <p className="kv_title_name">{t.home.content01}</p>
          <p>{t.home.content02}</p>
        </div>
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default function HomeContent({ personalInfo, skills }: HomeContentProps) {
  return (
    <div className="home">
      <HomeHeader />
      <HomeAbout personalInfo={personalInfo} />
      <HomeWorks />
      <HomeSkill skills={skills} />
    </div>
  )
}
