import { getPayload } from 'payload'
import config from '@/payload.config'
import ProfileContent from './ProfileContent'

export default async function Profile() {
  const payload = await getPayload({ config })

  // 獲取工作經歷
  const workExperiences = await payload.find({
    collection: 'work-experiences',
    sort: 'order',
  })

  // 獲取教育背景
  const educations = await payload.find({
    collection: 'educations',
    sort: 'order',
  })

  // 獲取技能（全部，不分頁）
  const skills = await payload.find({
    collection: 'skills',
    sort: 'order',
    limit: 1000, // 設定足夠大的 limit 來獲取所有技能
  })

  return (
    <>
      <ProfileContent
        workExperiences={workExperiences.docs}
        educations={educations.docs}
        skills={skills.docs}
      />
    </>
  )
}
