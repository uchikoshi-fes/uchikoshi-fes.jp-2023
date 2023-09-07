import {
  BsFillHouseFill,
  BsBank,
  BsFillBalloonFill,
  BsThreeDots,
  BsMegaphoneFill,
  BsCartFill,
} from 'react-icons/bs'
import { FaCoffee, FaThermometer } from 'react-icons/fa'
import { fetchOrganizations } from './fetch'
import OrgDats from './orgs-data'
import styles from './page.module.scss'

const CATEGORIES = [
  { id: 'all', name: '全て', icon: <BsFillHouseFill /> },
  { id: 'exhibition', name: '展示', icon: <BsBank /> },
  { id: 'cafe', name: '喫茶', icon: <FaCoffee /> },
  { id: 'stand', name: '屋台', icon: <FaThermometer /> },
  { id: 'performance', name: '公演', icon: <BsMegaphoneFill /> },
  { id: 'amusement', name: 'アミューズメント', icon: <BsFillBalloonFill /> },
  { id: 'shop', name: '販売', icon: <BsCartFill /> },
  { id: 'other', name: 'その他', icon: <BsThreeDots /> },
]

const AREAS = [
  { id: 'main-f1', name: '本館１階' },
  { id: 'main-f2', name: '本館２階' },
  { id: 'jhs-f1', name: '中学棟１階' },
  { id: 'jhs-f2', name: '中学棟２階' },
  { id: 'jhs-f3', name: '中学棟３階' },
  { id: 'jhs-f4', name: '中学棟４階' },
  { id: 'jhs-f5', name: '中学棟５階' },
  { id: 'hs-f1', name: '高校棟１階' },
  { id: 'hs-f2', name: '高校棟２階' },
  { id: 'hs-f3', name: '高校棟３階' },
  { id: 'hs-f4', name: '高校棟４階' },
  { id: 'hs-f5', name: '高校棟５階' },
  { id: 'library', name: '清話書林' },
  { id: 'arena', name: 'アリーナ' },
  { id: 'hc-a', name: 'ハンドボールコートＡ' },
  { id: 'field', name: 'グラウンド' },
  { id: ' ', name: 'その他' },
]

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
export { CATEGORIES, AREAS }
