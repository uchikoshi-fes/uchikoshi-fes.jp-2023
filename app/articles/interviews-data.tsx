'use client'
import Link from '@components/common/link'
import styles from './page.module.scss'

const InterviewsData = ({
  Interviews,
}: {
  Interviews: {
    name: string
    post: string
    timestamp: string
  }[]
}) => {
  return (
    <>
      <ul className={styles['articles-list']}>
        {Interviews &&
          Interviews.map(({ name, post, timestamp }) => {
            return (
              <li key={timestamp}>
                <Link href={`/articles/${timestamp}`}>
                  <div className={styles['Interviews-item']}>
                    <h2>
                      {post}担当 {name}さん インタビュー
                    </h2>
                    <div className={styles.description}>
                      {post}担当 {name}さん へのインタビューです。
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default InterviewsData
