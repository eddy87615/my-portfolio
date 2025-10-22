'use client'

import { useLanguageStore } from '@/store/languageStore'
import type { Skill } from '@/payload-types'

interface ProfileSkillsProps {
  skills: Skill[]
}

export default function ProfileSkills({ skills }: ProfileSkillsProps) {
  const language = useLanguageStore((state) => state.language)

  return (
    <div className="profile_skills_section">
      <h3 className="profile_subTitle">
        {language === 'zh' ? '技術能力' : language === 'jp' ? '技術スキル' : 'Technical Skills'}
      </h3>
      <ul className="skills_list">
        {skills.map((skill) => (
          <li key={skill.id} className={`skill_tag level_${skill.proficiency}`}>
            <span className="skill_name">{skill.name}</span>
            <span className="skill_proficiency">
              <span className="proficiency_level" data-level={skill.proficiency}>
                {'★'.repeat(skill.proficiency)}
                {'☆'.repeat(5 - skill.proficiency)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
