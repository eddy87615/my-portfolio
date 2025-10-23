import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'
import type { PersonalInfo } from '@/payload-types'

import './HomeAbout.css'

interface HomeAboutProps {
  personalInfo: PersonalInfo
}

export default function HomeAbout({ personalInfo }: HomeAboutProps) {
  const language = useLanguageStore((state) => state.language)
  const t = useTranslation()

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
          <div className="home_about_info">
            <div className="home_about_img_frame">
              <Image src="/Images/kv-img005.jpg" alt="eddy photo" fill />
              <span className="photo_decoFrame"></span>
            </div>
            <div className="home_about_list">
              <p className="home_about_title">{t.home.titleAboutMe}</p>
              <p className="home_about_subtitle">{t.home.titleAboutMeInfo}</p>
              <div className="home_about_content">
                <RichText data={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
