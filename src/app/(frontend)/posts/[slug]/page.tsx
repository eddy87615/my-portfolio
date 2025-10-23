import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import config from '@/payload.config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

import './page.css'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = posts.docs[0]

  if (!post) {
    notFound()
  }

  return (
    <article className="post_detail">
      {post.coverImage && typeof post.coverImage === 'object' && post.coverImage.url && (
        <div className="post_detail_cover">
          <Image src={post.coverImage.url} alt={post.coverImage.alt || post.title} fill />
        </div>
      )}
      <h1 className="post_detail_title">{post.title}</h1>
      <div className="post_detail_box">{post.content && <RichText data={post.content} />}</div>
    </article>
  )
}
