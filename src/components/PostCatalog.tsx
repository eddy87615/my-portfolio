'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import './postCatalog.css'

export default function PostCatalog() {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)
  const [headings, setHeadings] = useState<
    Array<{
      h2: string
      id: string
      h3s: Array<{ text: string; id: string }>
    }>
  >([])

  useEffect(() => {
    const h2Elements = Array.from(document.querySelectorAll('.post_detail_box h2'))
    const h3Elements = Array.from(document.querySelectorAll('.post_detail_box h3'))

    // 为每个 h2 和 h3 生成唯一的 id
    h2Elements.forEach((h2, index) => {
      h2.id = `heading-${index}`
    })
    h3Elements.forEach((h3, index) => {
      h3.id = `subheading-${index}`
    })

    const combinedHeadings = h2Elements.map((h2) => {
      const followingH3s: Array<{ text: string; id: string }> = []
      let nextElement = h2.nextElementSibling

      while (nextElement && nextElement.tagName !== 'H2') {
        if (nextElement.tagName === 'H3') {
          followingH3s.push({
            text: nextElement.textContent || '',
            id: nextElement.id,
          })
        }
        nextElement = nextElement.nextElementSibling
      }
      return {
        h2: h2.textContent || '',
        id: h2.id,
        h3s: followingH3s,
      }
    })
    setHeadings(combinedHeadings)
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 如果没有任何 h2 或 h3，则不渲染目录
  if (headings.length === 0) {
    return null
  }

  return (
    <div className="postCatalog">
      <p className="postCatalog-title">{t.posts.postMenu}</p>
      <ul>
        {headings.map((heading, index) => (
          <li key={index} className="catalogH2">
            <a onClick={() => scrollToHeading(heading.id)}>{heading.h2}</a>
            {heading.h3s.length > 0 && (
              <ul className="catalogH3">
                {heading.h3s.map((subHeading, subIndex) => (
                  <li key={subIndex}>
                    <a onClick={() => scrollToHeading(subHeading.id)}>{subHeading.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
