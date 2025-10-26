'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import Image from 'next/image'
import PortableText from '@/components/PortableText'

import './HomeAbout.css'

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

interface HomeAboutProps {
  personalInfo: PersonalInfo | null
}

export default function HomeAbout({ personalInfo }: HomeAboutProps) {
  const language = useLanguageStore((state) => state.language)
  const t = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // 如果沒有 personalInfo 資料，顯示提示訊息
  if (!personalInfo) {
    return (
      <div className="home_about">
        <div className="size_wrapper">
          <div className="home_about_info">
            <div className="home_about_img_frame">
              <Image src="/images/kv-img002.jpg" alt="eddy photo" fill />
              <span className="photo_decoFrame"></span>
            </div>
            <div className="home_about_list">
              <p className="home_about_title">{t.home.titleAboutMe}</p>
              <p className="home_about_subtitle">{t.home.titleAboutMeInfo}</p>
              <div className="home_about_content">
                <p>請先在 Sanity Studio 中建立 Personal Info 資料</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 根據語言選擇對應的內容
  const content =
    language === 'zh'
      ? personalInfo.zhContent
      : language === 'jp'
        ? personalInfo.jpContent
        : personalInfo.engContent

  return (
    <>
      <div className="home_about">
        <div className="size_wrapper">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="home_about_info"
          >
            <div className="home_about_img_frame">
              <Image src="/images/kv-img002.jpg" alt="eddy photo" fill />
              <span className="photo_decoFrame"></span>
            </div>
            <div className="home_about_list">
              <p className="home_about_title">{t.home.titleAboutMe}</p>
              <p className="home_about_subtitle">{t.home.titleAboutMeInfo}</p>
              <div className="home_about_content">
                {content && <PortableText value={content} />}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
