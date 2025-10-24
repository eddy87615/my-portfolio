import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'

import './HomeSkill.css'

interface Skill {
  _id: string
  name: string
  descriptionZh?: string
  descriptionEng?: string
  descriptionJp?: string
  proficiency: number
  order: number
}

interface HomeSkillProps {
  skills: Skill[]
}

export default function HomeSkill({ skills }: HomeSkillProps) {
  const language = useLanguageStore((state) => state.language)
  const t = useTranslation()

  // 根據語言獲取技術描述
  const getDescription = (skill: Skill) => {
    if (language === 'zh') return skill.descriptionZh
    if (language === 'jp') return skill.descriptionJp
    return skill.descriptionEng
  }

  return (
    <>
      <div className="home_skill_section">
        <div className="size_wrapper">
          <p className="home_about_title">{t.home.titleAboutSkill01}</p>
          <p className="home_about_subtitle">{t.home.titleAboutSkill02}</p>
          <div className="home_about_skill_section">
            <ul className="home_about_skill_list">
              {skills.map((skill) => (
                <li key={skill._id} className="home_about_skill_item">
                  <div>
                    <p className="home_skill_name">
                      <span>{skill.name}</span>
                      <span className="home_skill_percentage">{skill.proficiency}%</span>
                    </p>
                    <div className="home_skill_progress_bar">
                      <div
                        className="home_skill_progress_fill"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="home_skill_description">{getDescription(skill)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
