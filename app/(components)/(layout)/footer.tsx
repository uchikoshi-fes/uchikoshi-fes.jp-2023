'use client'
// // components
// import { InView } from "react-intersection-observer";
// import { Timeline as TwitterTL } from "react-twitter-widgets";
//import Outline from "./outline";
// styles
import { ReactNode } from 'react'
import { BsLine, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'
import styles from './footer.module.scss'
// icons
// config
import { links as menuLinks } from './menu'
import Link from 'app/(components)/(common)/link'
import PACKAGE from 'package.json'

// const Tweets = ({ tweetLimit }) => {
//   return (
//     <section className={styles["tweets"]}>
//       <h2 className={styles["tweets-title"]}>公式 Twitter</h2>
//       <InView triggerOnce rootMargin="200px">
//         {({ inView, ref }) => (
//           <div className={styles["twitter-tl"]} ref={ref}>
//             {inView && (
//               <TwitterTL
//                 dataSource={{
//                   sourceType: "profile",
//                   screenName: "uchikoshifes",
//                 }}
//                 options={{ tweetLimit }}
//               />
//             )}
//           </div>
//         )}
//       </InView>
//     </section>
//   );
// };

const Sns = () => {
  return (
    <div className={styles.sns}>
      <div className={styles['sns-line']}>
        <Link href='https://line.me/R/ti/p/@136ffgbc'>
          <span className={styles['sns-icon']}>
            <BsLine />
          </span>
          公式 LINE を友だち追加
        </Link>
      </div>
      <div className={styles['sns-youtube']}>
        <Link href='https://youtube.com/c/uchikoshi-fes'>
          <span className={styles['sns-icon']}>
            <BsYoutube />
          </span>
          公式 YouTube をチャンネル登録
        </Link>
      </div>
      <div className={styles['sns-twitter']}>
        <Link href='https://twitter.com/uchikoshifes'>
          <span className={styles['sns-icon']}>
            <BsTwitter />
          </span>
          公式 Twitter をフォロー
        </Link>
      </div>
      <div className={styles['sns-instagram']}>
        <Link href='https://instagram.com/uchikoshifes'>
          <span className={styles['sns-icon']}>
            <BsInstagram />
          </span>
          公式 Instagram をフォロー
        </Link>
      </div>
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
      {/* <Tweets tweetLimit={5} /> */}
      {/* <Outline /> */}
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
