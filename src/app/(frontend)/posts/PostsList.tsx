'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'
import { getAllPosts, getAllTags } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import Loading from '../loading'
import NoPost from './NoPost'

import './PostList.css'

interface Media {
  id: string | number
  url: string
  alt?: string
  width?: number
  height?: number
}

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
  coverImage?: any
  tags?: Tag[]
  publishedAt: string
}

interface PaginationInfo {
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function PostsList() {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)
  const [mounted, setMounted] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all')
  const [posts, setPosts] = useState<Post[]>([])
  const [tags, setTags] = useState<Tag[]>([])
  const [loading, setLoading] = useState(false)

  // 分頁相關 state
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState<PaginationInfo>({
    totalDocs: 0,
    limit: 12,
    totalPages: 0,
    page: 1,
    hasNextPage: false,
    hasPrevPage: false,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // 獲取所有標籤
  useEffect(() => {
    async function fetchTags() {
      try {
        const data = await getAllTags()
        setTags(data || [])
      } catch (error) {
        console.error('Failed to fetch tags:', error)
      }
    }
    fetchTags()
  }, [])

  // 獲取文章（客戶端篩選和分頁）
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const allPosts = await getAllPosts()

        // 根據標籤篩選
        let filteredPosts = allPosts || []
        if (selectedTag !== 'all') {
          filteredPosts = filteredPosts.filter((post: Post) =>
            post.tags?.some((tag) => tag._id === selectedTag),
          )
        }

        // 客戶端分頁
        const limit = 12
        const startIndex = (currentPage - 1) * limit
        const endIndex = startIndex + limit
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

        setPosts(paginatedPosts)
        setPagination({
          totalDocs: filteredPosts.length,
          limit: limit,
          totalPages: Math.ceil(filteredPosts.length / limit),
          page: currentPage,
          hasNextPage: endIndex < filteredPosts.length,
          hasPrevPage: currentPage > 1,
        })
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [selectedTag, currentPage])

  // 切換標籤時重置到第一頁
  const handleTagChange = (tagId: string | 'all') => {
    setSelectedTag(tagId)
    setCurrentPage(1)
  }

  // 分頁按鈕處理
  const goToPage = (page: number) => {
    setCurrentPage(page)
    // 滾動到頂部（可選）
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

  // 產生分頁按鈕陣列
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5 // 最多顯示 5 個按鈕

    let startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(pagination.totalPages, startPage + maxVisible - 1)

    // 調整 startPage，確保顯示足夠的按鈕
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="postList_wrapper">
      <div className="postList_top">
        <h1 className="post_title">{t.posts.title}</h1>
        <p></p>
        <div className="tag">
          <button
            className={`tag_button ${selectedTag === 'all' ? 'active' : ''}`}
            onClick={() => handleTagChange('all')}
          >
            {t.posts.allTags}
          </button>
          {tags?.map((tag) => (
            <button
              key={tag._id}
              className={`tag_button ${selectedTag === tag._id ? 'active' : ''}`}
              onClick={() => handleTagChange(tag._id)}
            >
              {getTagName(tag)}
            </button>
          ))}
        </div>
      </div>

      <div className="postList_list">
        {loading ? (
          <Loading />
        ) : posts?.length > 0 ? (
          <>
            <ul className="all_posts">
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

            {/* 分頁控制 */}
            {pagination.totalPages > 1 && (
              <div className="pagination">
                {/* 上一頁按鈕 */}
                <button
                  className="pagination-button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={!pagination.hasPrevPage}
                >
                  ← 上一頁
                </button>

                {/* 第一頁 */}
                {getPageNumbers()[0] > 1 && (
                  <>
                    <button className="pagination-button" onClick={() => goToPage(1)}>
                      1
                    </button>
                    {getPageNumbers()[0] > 2 && <span className="pagination-ellipsis">...</span>}
                  </>
                )}

                {/* 頁碼按鈕 */}
                {getPageNumbers().map((page) => (
                  <button
                    key={page}
                    className={`pagination-button ${currentPage === page ? 'active' : ''}`}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                ))}

                {/* 最後一頁 */}
                {getPageNumbers()[getPageNumbers().length - 1] < pagination.totalPages && (
                  <>
                    {getPageNumbers()[getPageNumbers().length - 1] < pagination.totalPages - 1 && (
                      <span className="pagination-ellipsis">...</span>
                    )}
                    <button
                      className="pagination-button"
                      onClick={() => goToPage(pagination.totalPages)}
                    >
                      {pagination.totalPages}
                    </button>
                  </>
                )}

                {/* 下一頁按鈕 */}
                <button
                  className="pagination-button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                >
                  下一頁 →
                </button>

                {/* 資訊顯示 */}
                <div className="pagination-info">
                  第 {currentPage} / {pagination.totalPages} 頁， 共 {pagination.totalDocs} 篇文章
                </div>
              </div>
            )}
          </>
        ) : (
          <NoPost />
        )}
      </div>
    </div>
  )
}
