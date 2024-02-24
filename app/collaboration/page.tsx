'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import Image from '@components/common/image'
import Link from '@components/common/link'
import styles from './page.module.scss'
import useClient from 'hooks/client'
import collaboImg from 'public/collabo.png'
import komatoLine from 'public/komato-line.jpg'

export default function Page() {
  const isClient = useClient()
  return (
    <div className={styles.collaboration}>
      <h1>コラボレーション</h1>
      <div className={styles['top-content']}>
        <Image
          src={collaboImg}
          alt='KOMAFES 翔 × Uchikoshi-Fes カイカ宣言'
          style={{ width: '100%', height: 'auto' }}
        ></Image>
        <p>
          2023年度の文化祭では、浅野中学・高等学校と駒場東邦中学校・高等学校でSNS上でのコラボをしました！皆さんはお楽しみいただけたでしょうか？？来年の45thコラボにも乞うご期待！！
        </p>
      </div>

      <ul>
        <li>
          <h2>駒場東邦文化祭 ホームページ</h2>
          <Link href='https://66.komafes.jp/'>https://66.komafes.jp/</Link>
        </li>
        <li>
          <h2>駒場東邦文化祭 公式LINE</h2>
          <Link href='https://lin.ee/2X0uXb1'>
            {/* <Image src={komatoLine} alt='駒場東邦文化祭公式ライン QRコード'></Image> */}
            <p>https://lin.ee/2X0uXb1</p>
          </Link>
        </li>
        <li>
          <h2>駒場東邦文化祭 公式PV</h2>
          {isClient && (
            <ReactPlayer
              width='100%'
              height='100%'
              url='https://youtu.be/UX44LNJu_nM'
              className={styles.player}
              controls
            />
          )}
        </li>
      </ul>
    </div>
  )
}
