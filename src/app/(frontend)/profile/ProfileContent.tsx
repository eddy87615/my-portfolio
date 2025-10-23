'use client'

import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import type { Skill, PersonalInfo } from '@/payload-types'

import './ProfileContent.css'
import ProfileSkills from './ProfileSkills'

interface ProfileContentProps {
  skills: Skill[]
  personalInfo: PersonalInfo
}

export default function ProfileContent({ skills, personalInfo }: ProfileContentProps) {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)

  return (
    <div className="profile_header">
      <div className="profile_header_wrapper">
        <h1>{t.nav.profile}</h1>
        <div className="about_info_frame">
          <div className="image_frame">
            <Image src="/Images/kv-img008.JPG" alt="eddy's profile image" fill />
            <span className="photo_decoFrame"></span>
          </div>
          <div className="profile_basic_info">
            <ul>
              <li>
                <span>{t.profile.zhNameTitle}</span>
                <span>
                  {language === 'zh'
                    ? personalInfo.nameZh
                    : language === 'jp'
                      ? personalInfo.nameJp
                      : personalInfo.nameEng}
                </span>
              </li>
              <li>
                <span>{t.profile.birthdayTitle}</span>
                <span>
                  {language === 'zh'
                    ? personalInfo.birthdayZh
                    : language === 'jp'
                      ? personalInfo.birthdayJp
                      : personalInfo.birthdayEng}
                </span>
              </li>
              <li>
                <span>{t.profile.nationalityTitle}</span>
                <span>
                  {language === 'zh'
                    ? personalInfo.nationalityZh
                    : language === 'jp'
                      ? personalInfo.nationalityJp
                      : personalInfo.nationalityEng}
                </span>
              </li>
              <li>
                <span>{t.profile.emailTitle}</span>
                <span>{personalInfo.email}</span>
              </li>
              <li>
                <span>{t.profile.locationTitle}</span>
                <span>
                  {language === 'zh'
                    ? personalInfo.locationZh
                    : language === 'jp'
                      ? personalInfo.locationJp
                      : personalInfo.locationEng}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile_detail_info">
          <ProfileSkills skills={skills} />
        </div>
      </div>
    </div>
  )
}
