import { useTranslation } from '@/i18n/useTranslation'

import './NoPost.css'

interface text {
  noPost: string
}

export default function NoPost() {
  const t = useTranslation()

  return (
    <>
      <div className="nopost_wrapper">
        <p>{t.posts.noPost}</p>
      </div>
    </>
  )
}
