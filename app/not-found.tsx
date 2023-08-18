import Link from '../components/common/link'
import styles from './not-found.module.scss'
export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <h2>ページが見つかりませんでした</h2>
      <p>
        昨年度のサイトは以下のURLで公開されています。お探しのものはこちらで見つかるかもしれません。
      </p>
      <Link href='https://uchikoshi-fes-2022.pages.dev/'>
        https://uchikoshi-fes-2022.pages.dev/
      </Link>
      <br />
      <Link href='/'>トップへ戻る</Link>
    </div>
  )
}
