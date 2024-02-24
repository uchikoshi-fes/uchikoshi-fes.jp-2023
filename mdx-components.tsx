import Image from '@components/common/image'
import Link from '@components/common/link'
import type { MDXComponents } from 'mdx/types'
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: (prop) => <p className={'paragraph'}>{prop.children}</p>,
    a: (prop) => <Link href={prop.href}>{prop.children}</Link>,
    img: (prop) => (
      <div className={'image'}>
        <Image
          title={prop.title}
          src={prop.src || ''}
          alt={prop.alt || ''}
          height={(prop.height as number) || 300}
          width={(prop.width as number) || 300}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    ),

    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  }
}
