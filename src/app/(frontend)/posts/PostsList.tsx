'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import Loading from '../loading'

import './PostList.css'

interface Media {
  id: string | number
  url: string
  alt?: string
  width?: number
  height?: number
}

interface Tag {
  id: string | number
  slug: string
  name: string
  nameZh: string
  nameJp: string
}

interface Post {
  id: string | number
  title: string
  slug: string
  coverImage?: Media | string | number
  tags?: Tag[]
}

export default function PostsList() {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)
  const [mounted, setMounted] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all')
  const [posts, setPosts] = useState<Post[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 獲取所有標籤
  useEffect(() => {
    async function fetchTags() {
      const res = await fetch('/api/tags?limit=10')
      const data = await res.json()
      setTags(data.docs || [])
    }
    fetchTags()
  }, [])

  // 獲取文章
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        let url = '/api/posts?limit=20&depth=2'

        if (selectedTag !== 'all') {
          url += `&where[tags][contains]=${selectedTag}`
        }

        const res = await fetch(url)
        const data = await res.json()
        setPosts(data.docs || [])
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [selectedTag, setLoading])

  return (
    <div className="postList_wrapper">
      <div className="postList_top">
        <h1>{t.posts.title}</h1>
        <div className="tag">
          <button
            className={`tag-button ${selectedTag === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedTag('all')}
          >
            {t.posts.allTags}
          </button>
          {tags?.map((tag) => (
            <button
              key={tag.id}
              className={`tag-button ${selectedTag === tag.id.toString() ? 'active' : ''}`}
              onClick={() => setSelectedTag(tag.id.toString())}
            >
              {mounted && language === 'zh' ? tag.nameZh : tag.nameJp}
            </button>
          ))}
        </div>
      </div>

      <div className="postList_list">
        {loading ? (
          <Loading />
        ) : posts?.length > 0 ? (
          <ul className="all_posts">
            {posts.map((post) => (
              <li key={post.id} className="post_link">
                <Link href={`/posts/${post.slug}`}>
                  {post.coverImage && typeof post.coverImage === 'object' && (
                    <div className="post_cover">
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverImage.alt || post.title}
                        fill
                      />
                    </div>
                  )}
                  <ul className="post_tags">
                    {post.tags?.map((tag) => (
                      <li key={tag.id}>
                        #{mounted && language === 'zh' ? tag.nameZh : tag.nameJp}
                      </li>
                    ))}
                  </ul>
                  <h2 className="postLink_title">{post.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>NO POST</p>
        )}
      </div>
    </div>
  )
}
