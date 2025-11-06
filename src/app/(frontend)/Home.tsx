'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { motion } from 'framer-motion'

import './Home.css'
import HomeAbout from '@/components/HomeAbout'
import HomeSkill from '@/components/HomeSkill'
import HomeWorks from '@/components/HomeWorks'
import HomePost from '@/components/HomePost'

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

const ScrollDown = function () {
  return (
    <div className="scroll-down">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

const HomeHeader = function () {
  const t = useTranslation()
  return (
    <div className="top_kv">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="kv_wrapper"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="kv_text"
        >
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="kv_title_hi"
          >
            {t.home.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="kv_title_name"
          >
            {t.home.content01}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t.home.content02}
          </motion.p>
        </motion.div>
        <ScrollDown />
      </motion.div>
    </div>
  )
}

export default function HomeContent({ personalInfo, skills }: HomeContentProps) {
  return (
    <div className="home">
      <HomeHeader />
      <HomeAbout personalInfo={personalInfo} />
      <HomeWorks />
      <HomePost />
      <HomeSkill skills={skills} />
    </div>
  )
}
