'use client'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
import Link from '../(common)/link'
import styles from './menu.module.scss'

const links = [
  { href: '/', name: 'トップ' },
  { href: '/orgs', name: '団体一覧' },
  { href: '/map', name: '校内マップ' },
  { href: '/events', name: 'イベント' },
  { href: '/radio', name: 'アサノラジオ' },
  { href: '/articles', name: '記事' },
  { href: '/q&a', name: 'Q&A' },
]

const MenuLinks = ({ narrow = false }: { narrow?: boolean }) => {
  const pathname = usePathname()

  return (
    <ul>
      {links.map(({ href, name /*color*/ }: { href: string; name: string }) => {
        console.log(pathname)
        // 現在のページがこのリンク以下の場合は active にする
        let className
        if (href === '/' ? pathname === href : pathname.startsWith(href)) {
          className = narrow ? styles['narrow-active'] : styles['wide-active']
        } else {
          className = narrow ? styles['narrow-inactive'] : styles['wide-inactive']
        }
        return (
          <li className={className} key={href}>
            <Link href={href} className={styles.link}>
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const NarrowMenu = ({
  setScrollable,
}: {
  setScrollable?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [open, setOpen] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)
  const pathname = usePathname()
  /*
   * setScrollable を変更することはないだろうが、
   * 依存性的に変更されることも考慮すべきである。
   * そして setScrollable が変更された際は呼び直すのが適切と考えられる。
   * 以上のことから依存配列に setScrollable を追加する。
   */
  useEffect(() => {
    if (setScrollable) {
      setScrollable(!open)
      return () => setScrollable(true)
    }
  }, [setScrollable, open])

  const handleOpen = (isOpen: boolean) => {
    setOpen(isOpen)
    if (isOpen) {
      const scrollY = window.scrollY
      setScrollPos(scrollY)
      document.body.classList.add('fixed')
      document.body.style.top = scrollY * -1 + 'px'
    } else {
      document.body.classList.remove('fixed')
      setTimeout(() => {
        window.scrollTo(0, scrollPos)
      }, 1)
    }
  }
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <button title='目次を開く' className={styles.hamburger} onClick={() => handleOpen(true)}>
        <FaBars />
      </button>
      {open && (
        <div className={styles['narrow-open-background']} onClick={() => handleOpen(false)}></div>
      )}
      <div className={`${styles.narrow} ${open ? styles['narrow-open'] : ''}`}>
        <div className={styles['narrow-menu-header']}>
          <button
            title='目次を閉じる'
            className={styles['narrow-closebutton']}
            onClick={() => handleOpen(false)}
          >
            <FaRegWindowClose />
          </button>
          <div className={styles['narrows-site-name']}>
            <Link href='/'>浅野学園打越祭</Link>
          </div>
        </div>
        <div className={styles['narrow-content']}>
          <MenuLinks narrow />
        </div>
      </div>
    </>
  )
}

const WideMenu = () => {
  return (
    <div className={styles.wide}>
      <MenuLinks />
    </div>
  )
}

const Menu = ({
  narrow,
  setScrollable,
}: {
  narrow?: boolean
  setScrollable?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <nav className={styles.container}>
      {narrow ? <NarrowMenu setScrollable={setScrollable} /> : <WideMenu />}
    </nav>
  )
}

export { links }
export default Menu
