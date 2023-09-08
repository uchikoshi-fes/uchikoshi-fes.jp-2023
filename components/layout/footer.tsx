'use client'
import { ReactNode } from 'react'
import Link from '@components/common/link'
import styles from './footer.module.scss'
import { links as menuLinks } from './menu'
import officialLinks from './social-media-links'
import PACKAGE from 'package.json'

const Sns = () => {
  return (
    <div className={styles.sns}>
      {officialLinks.map(({ service, text, style, href, icon }) => (
        <div className={styles[style]} key={href}>
          <Link href={href} alia-label={`公式` + service}>
            <span className={styles['sns-icon']}>{icon}</span>
            {text}
          </Link>
        </div>
      ))}
    </div>
  )
}

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles['menu-title']}>Links</h2>
      <ul className={styles['menu-links']}>
        {menuLinks.map(
          ({ href, name }: { href: string; name: string }): ReactNode => (
            <li key={href}>
              <Link href={href}>{name}</Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}

const Others = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles['menu-title']}>Others</h2>
      <ul className={styles['menu-links']}>
        <li>
          <Link href='/contact'>お問い合わせ</Link>
        </li>
        <li>
          <Link href='/licenses'>ライセンス</Link>
        </li>
        <li>
          <Link href='https://www.asano.ed.jp/'>浅野学園公式サイトはこちら</Link>
        </li>
      </ul>
    </nav>
  )
}

const Copyright = () => {
  return <div className={styles.copyright}>v{PACKAGE.version} 2023</div>
}

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Menu />
        <Others />
        <Sns />
        <Copyright />
      </footer>
    </>
  )
}

export default Footer
