import { useState, useEffect } from 'react'
import { FaRegWindowClose, FaRegPlayCircle } from 'react-icons/fa'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'
import Image from '@components/common/image'
import styles from './promotion-videos.module.scss'

const PV_ALL = [
  {
    name: '第１弾',
    url: 'https://youtu.be/ZA0utw7irDY',
    id: 'ZA0utw7irDY',
  },
]

const PromotionVideos = () => {
  const [pvTabName, setPvTabName] = useState(PV_ALL[0].name)
  const [hasWindow, setHasWindow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  const getVideoId = () => {
    const p = PV_ALL.find(({ name }) => name === pvTabName)
    return p ? p.id : ''
  }
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
      top: '10%',
      left: '3%',
      right: '3%',
      bottom: '10%',
      backgroundColor: 'rgba(0,0,0,1)',
      border: 'none',
    },
  }

  return (
    <section className={styles['promotion-videos']}>
      <h2 className={styles['pv-title']}>PV</h2>
      <div className={styles['pv-window']}>
        <ul className={styles['pv-tabs']}>
          {PV_ALL.map(({ name }) => (
            <li
              className={name === pvTabName ? styles['pv-tab-active'] : styles['pv-tab-inactive']}
              key={name}
            >
              <button onClick={() => setPvTabName(name)}>{name}</button>
            </li>
          ))}
        </ul>

        <div className={styles['pv-content']}>
          <button title='動画を観る' onClick={() => setIsOpen(true)} className={styles.playButton}>
            <Image
              src={'https://img.youtube.com/vi/' + getVideoId() + '/sddefault.jpg'}
              width='640'
              height='480'
              alt={'プロモーションビデオ' + pvTabName + 'のサムネイル'}
            />
            <FaRegPlayCircle className={styles.playIcon} />
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            ariaHideApp={false}
            style={customStyles}
          >
            <button
              title='動画を閉じる'
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              <FaRegWindowClose />
            </button>
            {hasWindow && (
              <ReactPlayer
                width='100%'
                height='100%'
                url={'https://youtu.be/' + getVideoId()}
                className={styles.player}
                controls
              />
            )}
          </Modal>
        </div>
      </div>
    </section>
  )
}
export default PromotionVideos
