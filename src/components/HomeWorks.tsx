import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguageStore } from '@/store/languageStore'
import { getPostsByTag } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import Loading from '../components/Loading'

import './HomeWorks.css'
import '../app/(frontend)/posts/PostList.css'

interface Tag {
  _id: string
  slug: { current: string }
  name: string
  nameZh: string
  nameJp: string
  nameEng: string
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  coverImage?: {
    alt?: string
    asset?: {
      _ref: string
      _type: string
    }
  }
  tags?: Tag[]
}

export default function HomeWorks() {
  const language = useLanguageStore((state) => state.language)
  const [mounted, setMounted] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  // 組件掛載狀態
  useEffect(() => {
    setMounted(true)
  }, [])

  // 載入包含 'my-works' 標籤的文章
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const data = await getPostsByTag('my-works')
        setPosts(data)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // 根據語言獲取標籤名稱
  const getTagName = (tag: Tag) => {
    if (!mounted) return tag.nameZh
    switch (language) {
      case 'zh':
        return tag.nameZh
      case 'jp':
        return tag.nameJp
      case 'eng':
        return tag.nameEng
      default:
        return tag.nameZh
    }
  }
  return (
    <>
      <div className="home_works_section">
        {loading ? (
          <Loading />
        ) : posts?.length > 0 ? (
          <>
            <ul className="home_works_posts">
              {posts.map((post) => (
                <li key={post._id} className="post_link">
                  <Link href={`/posts/${post.slug.current}`}>
                    {post.coverImage && (
                      <div className="post_cover">
                        <Image
                          src={urlFor(post.coverImage).url()}
                          alt={post.coverImage.alt || post.title}
                          fill
                        />
                      </div>
                    )}
                    <ul className="post_tags">
                      {post.tags?.map((tag) => (
                        <li key={tag._id}>#{getTagName(tag)}</li>
                      ))}
                    </ul>
                    <h2 className="postLink_title">{post.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
