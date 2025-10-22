import type { WorkExperience } from '@/payload-types'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'

import './ProfileContent.css'

interface ProfileJobExperienceProps {
  workExperiences: WorkExperience[]
}

export default function ProfileJobExperience({ workExperiences }: ProfileJobExperienceProps) {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)

  const yearSuffix = {
    zh: '年',
    jp: '年',
    eng: '',
  }

  // 輔助函數：將富文本轉換為純文本
  const renderRichText = (richText: any) => {
    if (!richText?.root?.children) return ''
    return richText.root.children
      .map((child: any) => {
        if (child.type === 'text') return child.text
        if (child.children) {
          return child.children.map((c: any) => c.text || '').join('')
        }
        return ''
      })
      .join(' ')
  }
  return (
    <>
      {/* 工作經歷 */}
      <h3 className="profile_subTitle02">{t.profile.title04}</h3>
      <>
        {workExperiences.map((work) => {
          const startYear = new Date(work.startDate).getFullYear()
          const endYear = work.endDate
            ? new Date(work.endDate).getFullYear()
            : language === 'zh'
              ? '至今'
              : language === 'jp'
                ? '現在'
                : 'Present'
          const company =
            language === 'zh'
              ? work.companyZh
              : language === 'jp'
                ? work.companyJp
                : work.companyEng
          const position =
            language === 'zh'
              ? work.positionZh
              : language === 'jp'
                ? work.positionJp
                : work.positionEng
          const description =
            language === 'zh'
              ? work.descriptionZh
              : language === 'jp'
                ? work.descriptionJp
                : work.descriptionEng

          return (
            <div key={work.id} className="profile_experience">
              <h4 className="profile_experience_companyName">
                <span>
                  {company} - {position}
                </span>
                <span className="profile_experience_period">
                  {' '}
                  {startYear}
                  {yearSuffix[language]} - {endYear}
                  {typeof endYear === 'number' ? yearSuffix[language] : ''}
                </span>
              </h4>

              {/* 工作描述 */}
              {description && (
                <p className="profile_experience_jobDescription">{renderRichText(description)}</p>
              )}

              {/* 主要職責 */}
              {work.responsibilities && work.responsibilities.length > 0 && (
                <div>
                  <h5 className="profile_experience_subTitle">
                    {language === 'zh'
                      ? '主要職責：'
                      : language === 'jp'
                        ? '主な職務：'
                        : 'Responsibilities:'}
                  </h5>
                  <ol>
                    {work.responsibilities.map((resp, idx) => {
                      const text =
                        language === 'zh'
                          ? resp.responsibilityZh
                          : language === 'jp'
                            ? resp.responsibilityJp
                            : resp.responsibilityEng
                      return (
                        <li key={resp.id || idx}>
                          <p>{text}</p>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              )}

              {/* 主要成就 */}
              {work.achievements && work.achievements.length > 0 && (
                <div>
                  <h5 className="profile_experience_subTitle">
                    {language === 'zh'
                      ? '主要成就：'
                      : language === 'jp'
                        ? '主な成果：'
                        : 'Achievements:'}
                  </h5>
                  <ul>
                    {work.achievements.map((achievement, idx) => {
                      const text =
                        language === 'zh'
                          ? achievement.achievementZh
                          : language === 'jp'
                            ? achievement.achievementJp
                            : achievement.achievementEng
                      return <li key={achievement.id || idx}>{text}</li>
                    })}
                  </ul>
                </div>
              )}

              {/* 使用技術 */}
              {work.skills && work.skills.length > 0 && (
                <div>
                  <h5 className="profile_experience_subTitle">
                    {language === 'zh'
                      ? '使用技術：'
                      : language === 'jp'
                        ? '使用技術：'
                        : 'Technologies:'}
                  </h5>
                  <div className="profile_experience_skillTag">
                    {work.skills.map((skill, idx) => (
                      <span key={skill.id || idx} className="profile_experience_Tag">
                        {skill.skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </>
    </>
  )
}
