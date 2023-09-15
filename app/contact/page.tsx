import Link from '@components/common/link'
import styles from './contact.module.scss'

const E_MAIL_ADDRESS = 'uchikoshi-support@asano.ed.jp'

const EMail = ({ address = E_MAIL_ADDRESS, subject = 'お問い合わせ' }) => {
  return (
    <Link href={`mailto:${address}?subject=${subject}`}>
      <> {address}</>
    </Link>
  )
}

const Contact = () => {
  return (
    <>
      <article className={styles.contact}>
        <h1>お問い合わせ</h1>
        <h2>打越祭</h2>
        <p>
          打越祭に関して質問、問い合わせがある場合は、以下の連絡先までご連絡ください。
          <br />
          <EMail />
        </p>
        <h2>本サイト</h2>
        <p>
          このサイトに関してバグ、誤植等を発見した場合や意見のある場合は以下のサイトでご報告ください。
          <br />
          <Link href='https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2023/issues'>
            <> GitHub Issues (GitHub アカウントが必要です)</>
          </Link>
        </p>
      </article>
    </>
  )
}

export default Contact
