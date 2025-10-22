'use client'

import { useLanguageStore } from '@/store/languageStore'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { AboutMe as AboutMeType } from '@/payload-types'

interface AboutMeProps {
  aboutMe: AboutMeType
}

export default function AboutMe({ aboutMe }: AboutMeProps) {
  const language = useLanguageStore((state) => state.language)

  // 根據語言選擇對應的內容
  const content =
    language === 'zh'
      ? aboutMe.zhContent
      : language === 'jp'
        ? aboutMe.jpContent
        : aboutMe.engContent

  return (
    <div className="about_me_section">
      <h3 className="profile_subTitle">關於我</h3>
      <RichText data={content} />
    </div>
  )
}
