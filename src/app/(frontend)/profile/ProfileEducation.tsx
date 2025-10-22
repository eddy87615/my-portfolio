import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import type { Education } from '@/payload-types'

import './ProfileContent.css'

interface ProfileEducationProps {
  educations: Education[]
}

export default function ProfileEducation({ educations }: ProfileEducationProps) {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)

  const yearSuffix = {
    zh: '年',
    jp: '年',
    eng: '',
  }

  return (
    <>
      {' '}
      {/* 教育背景 */}
      <h3 className="profile_subTitle02">{t.profile.title03}</h3>
      <ul className="profile_education_list">
        {educations.map((edu) => {
          const school =
            language === 'zh' ? edu.schoolZh : language === 'jp' ? edu.schoolJp : edu.schoolEng
          const major =
            language === 'zh' ? edu.majorZh : language === 'jp' ? edu.majorJp : edu.majorEng
          const startYear = new Date(edu.startDate).getFullYear()
          const endYear = edu.endDate
            ? new Date(edu.endDate).getFullYear()
            : language === 'zh'
              ? '至今'
              : language === 'jp'
                ? '現在'
                : 'Present'
          const status = language === 'zh' ? '畢業' : language === 'jp' ? '卒業' : 'Graduate'

          return (
            <li key={edu.id} className="profile_education_item">
              <span className="period_school">
                <span className="period">
                  {startYear}
                  {yearSuffix[language]} - {endYear}
                  {typeof endYear === 'number' ? yearSuffix[language] : ''}
                </span>
                {school} - {major}
              </span>
              <span className="status">{status}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
