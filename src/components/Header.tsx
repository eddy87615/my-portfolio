'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/i18n/useTranslation'
import LanguageSelector from './LanguageSelector'
import './Header.css'

import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'

export default function Header() {
  const t = useTranslation()

  return (
    <>
      <header>
        <div className="header_wrapper">
          <div className="header_snsLink">
            <Link href="https://github.com/eddy87615" target="_blank">
              <FaGithub className="sns_icon" />
            </Link>
            <Link href="https://www.instagram.com/e.d.c_0615/" target="_blank">
              <FaInstagram className="sns_icon" />
            </Link>
            <Link href="mailto:eddychan615@gmail.com" target="_blank">
              <IoMailOutline className="sns_icon" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link href="/">{t.nav.home}</Link>
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
