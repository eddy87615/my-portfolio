'use client'

import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import type { WorkExperience, Education, Skill } from '@/payload-types'

import './ProfileContent.css'
import ProfileJobExperience from './ProfileJobExperience'
import ProfileEducation from './ProfileEducation'
import ProfileSkills from './ProfileSkills'

interface ProfileContentProps {
  workExperiences: WorkExperience[]
  educations: Education[]
  skills: Skill[]
}

export default function ProfileContent({ workExperiences, educations, skills }: ProfileContentProps) {
  const t = useTranslation()

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
            <h2 className="profile_subTitle">{t.profile.title01}</h2>
            <ul>
              <li>
                <span>{t.profile.zhNameTitle}</span>
                <span>{t.profile.zhName}</span>
              </li>
              <li>
                <span>{t.profile.sedNameTitle}</span>
                <span>{t.profile.sedName}</span>
              </li>
              <li>
                <span>{t.profile.birthdayTitle}</span>
                <span>{t.profile.birthday}</span>
              </li>
              <li>
                <span>{t.profile.nationalityTitle}</span>
                <span>{t.profile.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile_detail_info">
          <h2 className="profile_subTitle">{t.profile.title02}</h2>
          <ProfileJobExperience workExperiences={workExperiences} />
          <ProfileEducation educations={educations} />
          <ProfileSkills skills={skills} />
        </div>
      </div>
    </div>
  )
}
