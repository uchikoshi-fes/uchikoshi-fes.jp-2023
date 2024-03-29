import NextLink from 'next/link'
import { ReactNode } from 'react'

const Link = ({
  href,
  children,
  className,
  ...props
}: {
  href?: string
  children?: ReactNode
  className?: string
}) => {
  // internal link
  if ((href && href.startsWith('/')) || href === '') {
    return (
      <NextLink href={href} className={className} {...props}>
        {children}
      </NextLink>
    )
    // external link
  } else {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={className} {...props}>
        {children}
      </a>
    )
  }
}
export default Link
