'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import LanguageSelector from './LanguageSelector'
import './Header.css'

export default function Header() {
  const t = useTranslation()

  return (
    <>
      <header>
        <div className="header_wrapper">
          <div className="logo">
            <p>{t.nav.logoTop}</p>
            <p>{t.nav.logoBottom}</p>
          </div>
          {/* <Image src="/images/logo.svg" width={50} height={50} alt="my logo" /> */}
          <ul className="menu">
            <li>
              <Link href="/">{t.nav.home}</Link>
            </li>
            <li>
              <Link href="/">{t.nav.profile}</Link>
            </li>
            <li>
              <Link href="/posts">{t.nav.posts}</Link>
            </li>
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
