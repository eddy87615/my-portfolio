import { client } from './sanity.client'
import { groq } from 'next-sanity'

// Post queries
export async function getAllPosts() {
  try {
    return await client.fetch(
      groq`*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        coverImage,
        publishedAt,
        "tags": tags[]-> {
          _id,
          name,
          slug,
          nameZh,
          nameEng,
          nameJp
        }
      }`,
    )
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// 取得包含特定標籤的文章
export async function getPostsByTag(tagSlug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "post" && $tagSlug in tags[]->slug.current] | order(publishedAt desc) {
        _id,
        title,
        slug,
        coverImage,
        publishedAt,
        "tags": tags[]-> {
          _id,
          name,
          slug,
          nameZh,
          nameEng,
          nameJp
        }
      }`,
      { tagSlug },
    )
  } catch (error) {
    console.error('Error fetching posts by tag:', error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        coverImage,
        content,
        publishedAt,
        "tags": tags[]-> {
          _id,
          name,
          slug,
          nameZh,
          nameEng,
          nameJp
        }
      }`,
      { slug },
    )
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Tag queries
export async function getAllTags() {
  try {
    return await client.fetch(
      groq`*[_type == "tag"] | order(name asc) {
        _id,
        name,
        slug,
        nameZh,
        nameEng,
        nameJp
      }`,
    )
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

// Skill queries
export async function getAllSkills() {
  try {
    return await client.fetch(
      groq`*[_type == "skill"] | order(order asc) {
        _id,
        name,
        descriptionZh,
        descriptionEng,
        descriptionJp,
        proficiency,
        order
      }`,
    )
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

// About Me query
export async function getAboutMe() {
  try {
    return await client.fetch(
      groq`*[_type == "aboutMe"][0] {
        _id,
        zhContent,
        engContent,
        jpContent
      }`,
    )
  } catch (error) {
    console.error('Error fetching about me:', error)
    return null
  }
}

// Personal Info query
export async function getPersonalInfo() {
  try {
    return await client.fetch(
      groq`*[_type == "personalInfo"][0] {
        _id,
        nameZh,
        nameEng,
        nameJp,
        birthdayZh,
        birthdayEng,
        birthdayJp,
        nationalityZh,
        nationalityEng,
        nationalityJp,
        email,
        locationZh,
        locationEng,
        locationJp,
        zhContent,
        engContent,
        jpContent
      }`,
    )
  } catch (error) {
    console.error('Error fetching personal info:', error)
    return null
  }
}
