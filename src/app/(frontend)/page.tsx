import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import HomeContent from './Home'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  // 獲取個人資料
  const personalInfo = await payload.findGlobal({
    slug: 'personal-info',
  })

  // 獲取技能（全部，不分頁）
  const skills = await payload.find({
    collection: 'skills',
    sort: 'order',
    limit: 1000,
  })

  return <HomeContent isAuthenticated={!!user} personalInfo={personalInfo} skills={skills.docs} />
}
