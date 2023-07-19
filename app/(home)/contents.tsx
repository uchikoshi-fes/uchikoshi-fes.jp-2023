'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, ReactNode, useRef, useEffect } from 'react'
import { useInView, motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import styles from './contents.module.scss'
import Countdown from './countdown'

const Contents = () => {
  const [Style, setStyle] = useState('')
  const [viewUpdate, setViewUpdate] = useState('')
  function handleClickStyle(childStyle: string) {
    setStyle(childStyle)
  }
  function handleViewUpdate(childName: string) {
    setViewUpdate(childName)
  }
  return (
    <div className={Style}>
      <Content
        name={styles.topColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Top />
      </Content>
      <Content
        name={styles.sloganColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Slogan />
      </Content>
      <Content
        name={styles.countdownColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Countdown />
      </Content>
      <Content
        name={styles.pvColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Pv />
      </Content>
      <Content
        name={styles.overviewColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Overview />
      </Content>
      <Content
        name={styles.accessColor}
        viewUpdate={viewUpdate}
        setStyle={handleClickStyle}
        setViewUpdate={handleViewUpdate}
      >
        <Access />
      </Content>
    </div>
  )
}

const Content = ({
  name,
  setStyle,
  children,
  viewUpdate,
  setViewUpdate,
}: {
  name: string
  setStyle: Function
  children?: ReactNode
  viewUpdate: string
  setViewUpdate: Function
}) => {
  const ref = useRef(null)
  const isInviw = useInView(ref, {
    margin: '-10% 0px -30% 0px',
  })
  useEffect(() => {
    isInviw ? setStyle(name) : setViewUpdate(name)
    //console.log('isInviw', name, isInviw)
  }, [name, isInviw, setStyle, setViewUpdate, viewUpdate])
  return (
    <div className={styles.content} ref={ref}>
      {children}
    </div>
  )
}

const Top = () => {
  return (
    <div className={styles.top}>
      <object type='image/svg+xml' data='kaika-sengen.svg' width='390' height='200'></object>
      <motion.div
        className={styles.titleContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 5,
          ease: 'easeInOut',
        }}
      >
        <h1 className={styles.title}>打越祭</h1>
        <h2 className={styles.date}>9/17・9/18</h2>
      </motion.div>
    </div>
  )
}

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h6 className={styles.smallTitle}>スローガン</h6>
      <h2 className={styles.largeTitle}> カイカ宣言 </h2>
      <p>
        <>
          コロナ禍からようやく活路を見出し、制約を受けずに「開禍」した文化祭を開催できる状況になりつつあります。
        </>
        <>
          そんな中で、私たちがこれまでできなかったことを「開化」させ、浅野生らしい個性の「開花」を感じることのできる文化祭を作り上げることを目指します。
        </>
      </p>
    </div>
  )
}

const Pv = () => {
  return (
    <div className={styles.pv}>
      <h2 className={styles.largeTitle}>PV</h2>
      <Image src='PV.png' alt='PV is coming soon.' width='300' height='300' priority={false} />
      <p>Official PV is coming soon!</p>
      <p>公式PV完成までもう少しだけお待ちください！</p>
    </div>
  )
}

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h6 className={styles.smallTitle}>概要</h6>
      <h2 className={styles.largeTitle}> 第44回 打越祭 </h2>
      <div className={styles.detail}>
        <ul>
          <li>
            <p className={styles.subheading}>日程</p>
            <p>9月17日（日）18日（月）</p>
          </li>
          <li>
            <p className={styles.subheading}>場所</p>
            <p>浅野中学校・高等学校</p>
            <p>〒221-0012 神奈川県横浜市神奈川区子安台１丁目３-１</p>
          </li>
          <li>
            <p>詳細は後日公開予定</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const GoogleMaps = () => {
  return (
    <div className={styles.map}>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6497.057482057193!2d139.658201!3d35.491202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185dd0cec4b9f1%3A0x61ef37511aa6ddb0!2z5rWF6YeO5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1654689474523!5m2!1sja!2sjp`}
        width='600'
        height='450'
        style={{ border: '0' }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      >
        ロード中...
      </iframe>
    </div>
  )
}

const Access = () => {
  return (
    <div className={styles.access}>
      <h2 className={styles.largeTitle}>アクセス</h2>
      <GoogleMaps />
      <div className={styles['access-content']}>
        <ul>
          <li>
            <h3 className={styles['access-content-title']}>電車でお越しの方</h3>
            <p>JR京浜東北線「新子安駅」から 徒歩8分</p>
            <p>京急本線「京急新子安駅」から 徒歩6分</p>
            <p>京急本線「生麦駅」から 徒歩11分</p>
          </li>
          <li>
            <h3 className={styles['access-content-title']}>路線バスでお越しの方</h3>
            <p>３８系統「浅野学園前バス停」から 徒歩1分</p>
            <Link
              className={styles['route-button']}
              href='https://maps.apple.com/maps?dirflg=r&daddr=35.489455621313176,139.6582380936508'
            >
              現在地からのルート
              <FaChevronRight />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Contents
