import Link from '@components/common/link'
import styles from './page.module.scss'

export default function Faq() {
  return (
    <div className={styles.faq}>
      <h1>よくある質問</h1>
      <ul>
        <li>
          <h2>Q.今年の文化祭はいつ開催されますか？</h2>
          <p>A.今年の文化祭は9月17日(日)・18日(月・祝)の2日間開催されます。</p>
        </li>
        <li>
          <h2>Q.今年の文化祭はどのような形で開催されますか？</h2>
          <p>A.今年は浅野中学・高等学校にて対面での開催となります。</p>
        </li>
        <li>
          <h2>Q.人数制限はありますか？また、事前申し込みは必要でしょうか</h2>
          <p>A.今年は人数制限なし、事前申し込み不要での開催です。</p>
        </li>
        <li>
          <h2>Q.自動車で来ることは可能ですか？</h2>
          <p>
            A.自動車での来場は出来ませんのでご了承ください。代わりに、電車・バス等の公共交通機関をご利用ください。
          </p>
        </li>
      </ul>
      <p>
        このほかに、質問やご意見のある場合はこちらをご覧ください。
        <br />
        <Link href='/contact'>お問い合わせ</Link>
      </p>
    </div>
  )
}
