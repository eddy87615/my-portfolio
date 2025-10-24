import { create } from 'zustand'
import {
  getAllPosts,
  getAllTags,
  getAllSkills,
  getAboutMe,
  getPersonalInfo,
} from '@/lib/sanity.queries'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  coverImage: any
  publishedAt: string
  tags?: Tag[]
  content?: any
}

interface Tag {
  _id: string
  name: string
  slug: { current: string }
  nameZh: string
  nameEng: string
  nameJp: string
}

interface Skill {
  _id: string
  name: string
  descriptionZh: string
  descriptionEng: string
  descriptionJp: string
  proficiency: number
  order: number
}

interface AboutMe {
  _id: string
  zhContent: any
  engContent: any
  jpContent: any
}

interface PersonalInfo {
  _id: string
  nameZh: string
  nameEng: string
  nameJp: string
  birthdayZh: string
  birthdayEng: string
  birthdayJp: string
  nationalityZh: string
  nationalityEng: string
  nationalityJp: string
  email: string
  locationZh: string
  locationEng: string
  locationJp: string
  zhContent: any
  engContent: any
  jpContent: any
}

interface ContentStore {
  // Data
  posts: Post[]
  tags: Tag[]
  skills: Skill[]
  aboutMe: AboutMe | null
  personalInfo: PersonalInfo | null

  // Loading states
  isLoadingPosts: boolean
  isLoadingTags: boolean
  isLoadingSkills: boolean
  isLoadingAboutMe: boolean
  isLoadingPersonalInfo: boolean

  // Actions
  fetchPosts: () => Promise<void>
  fetchTags: () => Promise<void>
  fetchSkills: () => Promise<void>
  fetchAboutMe: () => Promise<void>
  fetchPersonalInfo: () => Promise<void>
  fetchAllData: () => Promise<void>
}

export const useContentStore = create<ContentStore>((set) => ({
  // Initial state
  posts: [],
  tags: [],
  skills: [],
  aboutMe: null,
  personalInfo: null,

  isLoadingPosts: false,
  isLoadingTags: false,
  isLoadingSkills: false,
  isLoadingAboutMe: false,
  isLoadingPersonalInfo: false,

  // Actions
  fetchPosts: async () => {
    set({ isLoadingPosts: true })
    try {
      const posts = await getAllPosts()
      set({ posts, isLoadingPosts: false })
    } catch (error) {
      console.error('Error fetching posts:', error)
      set({ isLoadingPosts: false })
    }
  },

  fetchTags: async () => {
    set({ isLoadingTags: true })
    try {
      const tags = await getAllTags()
      set({ tags, isLoadingTags: false })
    } catch (error) {
      console.error('Error fetching tags:', error)
      set({ isLoadingTags: false })
    }
  },

  fetchSkills: async () => {
    set({ isLoadingSkills: true })
    try {
      const skills = await getAllSkills()
      set({ skills, isLoadingSkills: false })
    } catch (error) {
      console.error('Error fetching skills:', error)
      set({ isLoadingSkills: false })
    }
  },

  fetchAboutMe: async () => {
    set({ isLoadingAboutMe: true })
    try {
      const aboutMe = await getAboutMe()
      set({ aboutMe, isLoadingAboutMe: false })
    } catch (error) {
      console.error('Error fetching about me:', error)
      set({ isLoadingAboutMe: false })
    }
  },

  fetchPersonalInfo: async () => {
    set({ isLoadingPersonalInfo: true })
    try {
      const personalInfo = await getPersonalInfo()
      set({ personalInfo, isLoadingPersonalInfo: false })
    } catch (error) {
      console.error('Error fetching personal info:', error)
      set({ isLoadingPersonalInfo: false })
    }
  },

  fetchAllData: async () => {
    await Promise.all([
      useContentStore.getState().fetchPosts(),
      useContentStore.getState().fetchTags(),
      useContentStore.getState().fetchSkills(),
      useContentStore.getState().fetchAboutMe(),
      useContentStore.getState().fetchPersonalInfo(),
    ])
  },
}))
