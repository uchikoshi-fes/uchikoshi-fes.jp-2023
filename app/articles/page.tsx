import { fetchInterviews } from './fetch'
import InterviewsData from './interviews-data'
import styles from './page.module.scss'

const Interviews = async () => {
  console.log('Fetching Interviews')
  const Interviews = await fetchInterviews()
  console.log('Interviews')
  console.log(Interviews)
  return (
    <>
      <article className={styles.articles}>
        <h1>記事一覧</h1>
        <div className={styles['Interviews-window']}>
          <div>
            <InterviewsData Interviews={Interviews}></InterviewsData>
          </div>
        </div>
      </article>
    </>
  )
}

export default Interviews
