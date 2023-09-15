import Image from 'next/image'
import Link from '@components/common/link'
import styles from './page.module.scss'
import radioTableDay1 from 'public/radio-table-day1.png'
import radioTableDay2 from 'public/radio-table-day2.png'

export default function Page() {
  return (
    <article>
      <div className={styles.article}>
        <h1>アサノラジオ</h1>
        <p>浅野学園の文化祭「打越祭」実行委員会による公式ラジオ企画！</p>
        <p>
          こちらの<Link href='https://www.youtube.com/@user-sl4jr2yk8q'>YouTube チャンネル</Link>
          で視聴できます。
        </p>
        <h2>番組表</h2>
        <div className={styles.container}>
          <section>
            <Image
              src={radioTableDay1}
              alt='アサノラジオの番組表、1日目'
              style={{ width: '100%', height: 'auto' }}
            ></Image>
          </section>
          <section>
            <Image
              src={radioTableDay2}
              alt='アサノラジオの番組表、2日目'
              style={{ width: '100%', height: 'auto' }}
            ></Image>
          </section>
        </div>
      </div>
    </article>
  )
}
