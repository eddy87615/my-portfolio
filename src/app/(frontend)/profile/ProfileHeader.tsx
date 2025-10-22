'use client'

import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import { useLanguageStore } from '@/store/languageStore'

import './ProfileHeader.css'

export default function ProfileHeader() {
  const t = useTranslation()
  const language = useLanguageStore((state) => state.language)

  const yearSuffix = {
    zh: '年',
    jp: '年',
    eng: '',
  }

  return (
    <div className="profile_header">
      <div className="profile_header_wrapper">
        <h1>{t.nav.profile}</h1>
        <div className="about_info_frame">
          <div className="image_frame">
            <Image src="/Images/Eddy.png" alt="eddy's profile image" fill />
          </div>
          <div className="profile_basic_info">
            <h2 className="profile_subTitle">{t.profile.title01}</h2>
            <ul>
              <li>
                <span>{t.profile.zhNameTitle}</span>
                <span>{t.profile.zhName}</span>
              </li>
              <li>
                <span>{t.profile.sedNameTitle}</span>
                <span>{t.profile.sedName}</span>
              </li>
              <li>
                <span>{t.profile.birthdayTitle}</span>
                <span>{t.profile.birthday}</span>
              </li>
              <li>
                <span>{t.profile.nationalityTitle}</span>
                <span>{t.profile.nationalityTitle}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile_detail_info">
          <h2 className="profile_subTitle">{t.profile.title02}</h2>
          <h3 className="profile_subTitle02">{t.profile.title03}</h3>
          <table>
            <tbody>
              <tr>
                <th scope="row">2025{yearSuffix[language]}</th>
                <td>HTML 表</td>
                <td>22</td>
              </tr>
              <tr>
                <th scope="row">Dennis</th>
                <td>ウェブアクセシビリティ</td>
                <td>45</td>
              </tr>
              <tr>
                <th scope="row">Sarah</th>
                <td>JavaScript フレームワーク</td>
                <td>29</td>
              </tr>
              <tr>
                <th scope="row">Karen</th>
                <td>ウェブパフォーマンス</td>
                <td>36</td>
              </tr>
            </tbody>
          </table>

          <ul>
            <li>
              <span>{t.profile.zhNameTitle}</span>
              <span>{t.profile.zhName}</span>
            </li>
            <li>
              <span>{t.profile.sedNameTitle}</span>
              <span>{t.profile.sedName}</span>
            </li>
            <li>
              <span>{t.profile.birthdayTitle}</span>
              <span>{t.profile.birthday}</span>
            </li>
            <li>
              <span>{t.profile.nationalityTitle}</span>
              <span>{t.profile.nationality}</span>
            </li>
          </ul>
          <h3 className="profile_subTitle02">{t.profile.title04}</h3>
          <ul>
            <li>
              <span>{t.profile.zhNameTitle}</span>
              <span>{t.profile.zhName}</span>
            </li>
            <li>
              <span>{t.profile.sedNameTitle}</span>
              <span>{t.profile.sedName}</span>
            </li>
            <li>
              <span>{t.profile.birthdayTitle}</span>
              <span>{t.profile.birthday}</span>
            </li>
            <li>
              <span>{t.profile.nationalityTitle}</span>
              <span>{t.profile.nationality}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
