import { getPersonalInfo, getAllSkills } from '@/lib/sanity.queries'
import HomeContent from './Home'
import './styles.css'

export default async function HomePage() {
  // 獲取個人資料
  const personalInfo = await getPersonalInfo()

  // 獲取技能（全部，按順序排列）
  const skills = await getAllSkills()

  return <HomeContent isAuthenticated={false} personalInfo={personalInfo} skills={skills || []} />
}
