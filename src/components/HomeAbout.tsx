import { useTranslation } from '@/i18n/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import './HomeAbout.css'

export default function HomeAbout() {
  const t = useTranslation()

  return (
    <>
      <div className="home_about">
        <div className="size_wrapper">
          <h2>{t.home.titleAboutMe}</h2>
          <div className="home_about_info">
            <div className="home_about_img_frame">
              <Image src="/Images/kv-img008.JPG" alt="eddy photo" fill />
              <span></span>
            </div>
            <div className="home_about_list">
              <ul>
                <li>
                  <span className="home_about_list_name01">{t.profile.zhName}</span>
                  <br />
                  <span className="home_about_list_name02">{t.profile.sedName}</span>
                </li>
                <li>
                  <span>{t.home.simpleInfoText01}</span>
                  <br />
                  <span>{t.home.simpleInfoText02}</span>
                </li>
                <li>
                  <span>{t.home.titleAboutMeLinkText}&emsp;</span>
                  <span>
                    <Link href="/profile">{t.nav.profile}</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
