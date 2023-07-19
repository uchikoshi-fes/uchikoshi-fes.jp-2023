import { BsLine, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'
import Contents from './contents'
import styles from './page.module.scss'

const Sns = () => {
  return (
    <div className={styles.sns}>
      <div className={styles.snsIcon}>
        <a href='https://line.me/R/ti/p/@136ffgbc'>
          <span className={styles.line}>
            <BsLine />
          </span>
        </a>
      </div>
      <div className={styles.snsIcon}>
        <a href='https://youtube.com/c/uchikoshi-fes'>
          <span className={styles.youtube}>
            <BsYoutube />
          </span>
        </a>
      </div>
      <div className={styles.snsIcon}>
        <a href='https://twitter.com/uchikoshifes'>
          <span className={styles.twitter}>
            <BsTwitter />
          </span>
        </a>
      </div>
      <div className={styles.snsIcon}>
        <a href='https://instagram.com/uchikoshifes'>
          <span className={styles.instagram}>
            <BsInstagram />
          </span>
        </a>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>第44回打越祭公式サイト</h1>
        <p className={styles.text}>2023年9月開催予定!</p>
        <Sns />
      </main> */}
      <div>
        <Contents />
      </div>
    </div>
  )
}

export default Home
