'use client'

import { useLanguageStore } from '@/store/languageStore'
import type { Skill } from '@/payload-types'

interface ProfileSkillsProps {
  skills: Skill[]
}

export default function ProfileSkills({ skills }: ProfileSkillsProps) {
  const language = useLanguageStore((state) => state.language)

  // 根據語言獲取技術描述
  const getDescription = (skill: Skill) => {
    if (language === 'zh') return skill.descriptionZh
    if (language === 'jp') return skill.descriptionJp
    return skill.descriptionEng
  }

  return (
    <div className="profile_skills_section">
      <h3 className="profile_subTitle">
        {language === 'zh' ? '技術能力' : language === 'jp' ? '技術スキル' : 'Technical Skills'}
      </h3>
      <ul className="skills_list">
        {skills.map((skill) => (
          <li key={skill.id} className="skill_item">
            <div className="skill_header">
              <span className="skill_name">{skill.name}</span>
              <span className="skill_percentage">{skill.proficiency}%</span>
            </div>
            <p className="skill_description">{getDescription(skill)}</p>
            <div className="skill_progress_bar">
              <div
                className="skill_progress_fill"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
