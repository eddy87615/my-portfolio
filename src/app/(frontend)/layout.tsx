import React from 'react'
import './styles.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'My personal portfolio website.',
  title: 'My Portfolio',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
