import { fetchOrganizations } from './fetch'
import OrgDats from './orgs-data'
import styles from './page.module.scss'

const Organizations = async () => {
  console.log('Fetching organizations')
  const organizations = await fetchOrganizations()
  console.log('Organizations')
  console.log(organizations)
  return (
    <>
      {/* <NextSeo title='団体一覧' openGraph={{ title: '参加団体一覧' }} /> */}
      <article className={styles.orgs}>
        <h1>参加団体一覧</h1>
        <p>
          カテゴリーごとにタブが分かれています。<></>
          タブをクリックすると、そのカテゴリーの団体のみが表示されます。
        </p>
        <div className={styles['organizations-window']}>
          <div>
            <OrgDats organizations={organizations}></OrgDats>
          </div>
        </div>
      </article>
    </>
  )
}

export default Organizations
