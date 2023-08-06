'use client'
import React from 'react'
import styles from './header.module.scss'
import Menu from './menu'
import Link from 'app/(components)/(common)/link'
import { useSmallerThan } from 'app/(hooks)/useWindowSize'

const Header = ({
  setScrollable,
}: {
  setScrollable?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const isNarrow = useSmallerThan({ width: 900 })

  return (
    <header className={styles.header}>
      {isNarrow && <Menu narrow setScrollable={setScrollable} />}
      <div className={styles['site-name']}>
        <Link href='/'>浅野学園打越祭</Link>
      </div>
      {!isNarrow && <Menu />}
    </header>
  )
}

export default Header
