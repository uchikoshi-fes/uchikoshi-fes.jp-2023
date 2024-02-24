import Link from '@components/common/link'
import { fetchOrganizations } from './fetch'
import OrgDats from './orgs-data'
import styles from './page.module.scss'

const Organizations = async () => {
  const organizations = await fetchOrganizations()
  return (
    <>
      {/* <NextSeo title='団体一覧' openGraph={{ title: '参加団体一覧' }} /> */}
      <article className={styles.orgs}>
        <h1>参加団体一覧</h1>
        <p>
          カテゴリーごとにタブが分かれています。<></>
          タブをクリックすると、そのカテゴリーの団体のみが表示されます。
          また、団体名をクリックすると、その団体の詳細ページに移動します。
          <br />
          喫茶店、屋台のメニュー表は
          <Link href='menus'>こちら</Link>
          からご覧ください。
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
