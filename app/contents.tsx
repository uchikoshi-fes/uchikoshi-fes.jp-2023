'use client'

import { useState, ReactNode, useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'
import styles from './contents.module.scss'

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
    console.log('isInviw', name, isInviw)
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
      <object type='image/svg+xml' data='kaika-sengen.svg' width='500' height='400'></object>
    </div>
  )
}

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <h6 className={styles.smallTitle}>スローガン</h6>
      <h2 className={styles.largeTitle}>「カイカ宣言」</h2>
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

export default Contents
