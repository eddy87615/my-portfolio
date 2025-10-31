'use client'

import { useState } from 'react'
import { PortableText as PortableTextReact } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import { Highlight, themes } from 'prism-react-renderer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function PortableTextContent({ value }: { value: any }) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div style={{ margin: '16px 0' }}>
            <Image src={urlFor(value).url()} alt={value.alt || 'Image'} width={800} height={600} />
          </div>
        )
      },
      code: ({ value }: any) => {
        return (
          <div style={{ margin: '16px 0' }}>
            {value.filename && (
              <div
                style={{
                  backgroundColor: '#282c34',
                  color: '#abb2bf',
                  padding: '0.5rem 1rem',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  borderBottom: '1px solid #3e4451',
                }}
              >
                📄 {value.filename}
              </div>
            )}
            <Highlight
              theme={themes.vsDark}
              code={value.code}
              language={value.language || 'javascript'}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={className}
                  style={{
                    ...style,
                    margin: 0,
                    padding: '1rem',
                    borderTopLeftRadius: value.filename ? 0 : '0.5rem',
                    borderTopRightRadius: value.filename ? 0 : '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                    fontSize: '14px',
                    overflow: 'auto',
                  }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '2rem',
                          userSelect: 'none',
                          opacity: 0.5,
                          marginRight: '1rem',
                        }}
                      >
                        {i + 1}
                      </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )
      },
      table: ({ value }: any) => {
        if (!value?.rows) {
          return null
        }
        return (
          <div style={{ margin: '2rem 0', overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid #ddd',
              }}
            >
              <tbody>
                {value.rows.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex}>
                    {row.cells?.map((cell: string, cellIndex: number) => (
                      <td
                        key={cellIndex}
                        style={{
                          border: '1px solid #ddd',
                          padding: '4px 8px',
                          textAlign: 'left',
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      },
      hr: () => (
        <hr
          style={{
            margin: '16px 0',
            border: 'none',
            borderTop: '1px solid #bcbcbcff',
          }}
        />
      ),
      gallery: ({ value }: any) => {
        if (!value?.images || value.images.length === 0) {
          return null
        }
        return (
          <div style={{ margin: '16px 0' }}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              loop={value.images.length > 1}
              spaceBetween={50}
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
              }}
            >
              {value.images.map((image: any, index: number) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '500px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setLightboxImage(urlFor(image).url())}
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt={image.alt || `Gallery Image ${index + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      },
    },

    block: {
      normal: ({ children }: any) => {
        // 檢查是否為空段落
        if (
          !children ||
          (Array.isArray(children) &&
            children.every((child: any) => child === '' || child === '\n'))
        ) {
          return <br />
        }
        return <p>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }: any) => {
        const href = value?.href || ''
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <>
      <PortableTextReact value={value} components={components} />

      {/* Lightbox */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: 'white',
              fontSize: '30px',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s',
            }}
            onClick={() => setLightboxImage(null)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            }}
          >
            ×
          </button>
          <div
            style={{
              position: 'relative',
              width: '90%',
              height: '90%',
              maxWidth: '1200px',
              maxHeight: '90vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={lightboxImage} alt="Enlarged image" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      )}
    </>
  )
}

export default function PortableText({ value }: { value: any }) {
  return <PortableTextContent value={value} />
}
