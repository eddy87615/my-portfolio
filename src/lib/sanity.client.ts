import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // perspective: 'published', // 暫時註解掉，改為讀取所有資料
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
