import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/sanity.queries'
import { urlFor } from '@/lib/sanity.client'
import PortableText from '@/components/PortableText'
import PostCatalog from '@/components/PostCatalog'
import Image from 'next/image'

import './page.css'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="post_detail">
      {post.coverImage && (
        <div className="post_detail_cover">
          <Image
            src={urlFor(post.coverImage).url()}
            alt={post.coverImage.alt || post.title}
            fill
          />
        </div>
      )}
      <h1 className="post_detail_title">{post.title}</h1>
      <PostCatalog />
      <div className="post_detail_box">
        {post.content && <PortableText value={post.content} />}
      </div>
    </article>
  )
}
