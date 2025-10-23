import { getPayload } from 'payload'
import config from '@/payload.config'
import ProfileContent from './ProfileContent'

export default async function Profile() {
  const payload = await getPayload({ config })

  // 獲取技能（全部，不分頁）
  const skills = await payload.find({
    collection: 'skills',
    sort: 'order',
    limit: 1000, // 設定足夠大的 limit 來獲取所有技能
  })

  // 獲取個人資料
  const personalInfo = await payload.findGlobal({
    slug: 'personal-info',
  })

  return (
    <>
      <ProfileContent skills={skills.docs} personalInfo={personalInfo} />
    </>
  )
}
