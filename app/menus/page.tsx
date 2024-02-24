import Image from '@components/common/image'
import styles from './menus.module.scss'
import cafeMenus from 'public/cafe-menus.jpg'
import yataiMenus from 'public/yatai-menus.jpg'

export default function Menus() {
  return (
    <div className={styles.menus}>
      <h1>メニュー表</h1>
      <ul>
        <li>
          <h2>喫茶店のメニュー</h2>
          <Image
            src={cafeMenus}
            alt='喫茶店のメニュー表'
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </li>
        <li>
          <h2>屋台のメニュー</h2>
          <Image
            src={yataiMenus}
            alt='屋台のメニュー表'
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </li>
      </ul>
    </div>
  )
}
