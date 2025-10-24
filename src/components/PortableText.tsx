'use client'

import { PortableText as PortableTextReact } from '@portabletext/react'
import { urlFor } from '@/lib/sanity.client'
import Image from 'next/image'
import { Highlight, themes } from 'prism-react-renderer'

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-4">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Image'}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <div style={{ margin: '2rem 0' }}>
          {value.filename && (
            <div
              style={{
                backgroundColor: '#282c34',
                color: '#abb2bf',
                padding: '0.5rem 1rem',
                borderTopLeftRadius: '0.5rem',
                borderTopRightRadius: '0.5rem',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                borderBottom: '1px solid #3e4451',
              }}
            >
              📄 {value.filename}
            </div>
          )}
          <Highlight theme={themes.vsDark} code={value.code} language={value.language || 'javascript'}>
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
                  fontSize: '0.875rem',
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
  },
}

export default function PortableText({ value }: { value: any }) {
  return <PortableTextReact value={value} components={components} />
}
