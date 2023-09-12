import fs from 'fs'
import Link from '@components/common/link'
import styles from './licenses.module.scss'
import LICENSES from 'licenses.json'
import PACKAGE from 'package.json'

const Contributors = ({ contributors }: { contributors: string[] }) => {
  return (
    <div>
      <h2>開発貢献者</h2>
      <ul>
        {contributors &&
          contributors.map((contributor) => (
            <li key={contributor}>
              <span className={styles.contributor}>{contributor}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

const Libraries = ({
  packages,
}: {
  packages: {
    name: string
    url: string
    licenses: string
    licenseText: string | null
  }[]
}) => {
  return (
    <article>
      <h2>ライブラリ</h2>
      <p>本サイトでは、以下のサードパーティライブラリを使用しています。</p>
      {packages.map((pkg) => {
        return (
          <article key={pkg.name}>
            <h3>
              <Link href={pkg.url}>{pkg.name}</Link>
            </h3>
            <p>
              <>ライセンス: </>
              <span className={styles['license-name']}>
                {pkg.licenses === 'UNKNOWN' ? '不明' : pkg.licenses}
              </span>
            </p>
            {pkg.licenseText && (
              <pre className={styles['license-text']}>
                <code>{pkg.licenseText}</code>
              </pre>
            )}
          </article>
        )
      })}
    </article>
  )
}

const Licenses = async () => {
  const props = await getStaticProps()
  const { packages, thisPackage } = props
  return (
    <>
      <article className={styles.licenses}>
        <h1>ライセンス</h1>
        <p>
          本サイトのコンテンツ及び
          <Link href='https://github.com/uchikoshi-fes/uchikoshi-fes.jp-2022'>ソースコード</Link>は
          <span className={styles['license-name']}>
            <> {thisPackage?.licenses} </>
          </span>
          で公開されています。
        </p>
        <pre className={styles['license-text']}>
          <code>{thisPackage?.licenseText}</code>
        </pre>
        <Contributors contributors={thisPackage?.contributors} />
        <Libraries packages={packages} />
      </article>
    </>
  )
}

const getStaticProps = async () => {
  const thisPackage = {
    name: PACKAGE.name,
    licenses: PACKAGE?.license ?? '不明',
    licenseText: await fs.promises.readFile('LICENSE', 'utf8').catch(() => ''),
    contributors: PACKAGE?.contributors ?? [],
  }

  console.log(thisPackage)
  const packages = []
  for (const [pkgName, pkg] of Object.entries(LICENSES)) {
    packages.push({
      name: pkgName,
      url: pkg.repository?.startsWith('https://')
        ? pkg.repository
        : `https://www.npmjs.com/package/${pkgName}`,

      licenses: pkg.licenses,
      licenseText:
        'licenseFile' in pkg
          ? await fs.promises.readFile(pkg.licenseFile, 'utf-8').catch(() => null)
          : null,
    })
  }

  return { packages, thisPackage }
}

export default Licenses
