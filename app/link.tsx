import NextLink from 'next/link'
import { ReactNode } from 'react'

const Link = ({ href, children, ...props }: { href: string; children?: ReactNode }) => {
  // internal link
  if (href.startsWith('/') || href === '') {
    return (
      <NextLink href={href}>
        <a href={href} {...props}>
          {children}
        </a>
      </NextLink>
    )
    // external link
  } else {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    )
  }
}
export default Link
