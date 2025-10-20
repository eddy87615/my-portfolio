'use client'

import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'

import './ProfileHeader.css'

export default function ProfileHeader() {
  const t = useTranslation()

  return (
    <div className="profile_header">
      <div className="profile_header_wrapper">
        <div className="image_frame">
          <Image src="/Images/Eddy.png" alt="eddy's profile image" fill />
        </div>
        <div className="profile_info">
          <ul>
            <li>
              <h1>{t.profile.zhName}</h1>
            </li>
            <li>
              <h2>{t.profile.sedName}</h2>
            </li>
            <li>1998/06/15</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
