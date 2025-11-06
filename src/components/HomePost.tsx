import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguageStore } from '@/store/languageStore'
import { getAllPosts } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import { useTranslation } from '@/i18n/useTranslation'
import Loading from './Loading'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import './HomeSwiperLR.css'

import './HomePost.css'
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
  const t = useTranslation()

  // 組件掛載狀態
  useEffect(() => {
    setMounted(true)
  }, [])

  // 載入包含 'my-works' 標籤的文章，並根據語言過濾
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true)
      try {
        const allPosts = await getAllPosts()

        // 語言對應：zh -> chinese-version, eng -> english-version, jp -> japanese-version
        const languageMap: { [key: string]: string } = {
          zh: 'chinese-version',
          eng: 'english-version',
          jp: 'japanese-version',
        }
        const languageTagSlug = languageMap[language]

        // 過濾出符合當前語言的文章
        const filteredPosts = allPosts.filter((post: Post) =>
          post.tags?.some((tag) => tag.slug.current === languageTagSlug),
        )

        setPosts(filteredPosts)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [language])

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
      {posts?.length > 0 ? (
        <div className="home_post_section">
          <div className="size_wrapper">
            <p className="home_about_title">{t.home.titleAboutPosts01}</p>
            <p className="home_about_subtitle">{t.home.titleAboutPosts02}</p>
            {loading ? (
              <Loading />
            ) : posts?.length > 0 ? (
              <>
                <ul className="home_posts">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                  >
                    {posts.map((post) => (
                      <SwiperSlide key={post._id}>
                        <div className="post_link">
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
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
