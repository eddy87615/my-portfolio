'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Image from 'next/image'

import HomeSwiperLR from '@/components/HomeSwiperLR'
import HomeSwiperTB from '@/components/HomeSwiperTB'

import './Home.css'

interface HomeContentProps {
  isAuthenticated: boolean
}

export default function HomeContent({ isAuthenticated }: HomeContentProps) {
  const t = useTranslation()

  return (
    // <div className="home">
    //   <div className="content">
    //     <div className="home_kv_wrapper">
    //       {/* <Image src="/Images/kv-img001.webp" alt="eddy's photo" fill /> */}
    //       <div className="swiper_left">
    //         <HomeSwiperLR />
    //       </div>
    //       <div className="kv-right">
    //         <div className="swiper_down">
    //           <HomeSwiperTB />
    //         </div>
    //         <div className="kv_text">
    //           <p className="kv_text_title">{t.home.title}</p>
    //           <p className="kv_text_content">
    //             {t.home.content01}
    //             <br />
    //             {t.home.content02}
    //             <br />
    //             {t.home.content03}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="home">
      <div className="home_kv_wrapper">
        {/* <Image src="/Images/kv-img001.webp" alt="eddy's photo" fill /> */}
        <div className="kv_text">
          <p className="kv_text_title">{t.home.title}</p>
          <p className="kv_text_content">
            {t.home.content01}
            <br />
            {t.home.content02}
            <br />
            {t.home.content03}
          </p>
        </div>
      </div>
    </div>
  )
}
