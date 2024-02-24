import Image from '@components/common/image'
import Link from '@components/common/link'
import styles from './page.module.scss'
import eventTable from 'public/event-table.jpg'

export default function Page() {
  return (
    <article>
      <div className={styles.article}>
        <h1>イベント</h1>
        <p>打越アリーナ、講堂、グラウンドで開催されるイベントのスケジュール表です。</p>
        <p>
          団体の詳細については<Link href='/orgs?category=公演'>こちら</Link>をご覧ください
        </p>
        <h2>スケジュール</h2>
        <div className={styles.container}>
          <section>
            <Image
              src={eventTable}
              width='1626'
              height='2182'
              alt='イベントのスケジュール表'
              style={{ width: '100%', height: 'auto' }}
            ></Image>
          </section>
        </div>
      </div>
    </article>
  )
}
