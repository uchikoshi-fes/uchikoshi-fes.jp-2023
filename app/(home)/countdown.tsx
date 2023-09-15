import { useEffect, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './countdown.module.scss'

const useClient = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true)
  }, [])
  return isClient
}

const TZ = 9 * 3600000

const FES_TIMES = [
  // 2023/09/17 9:00~18:00
  {
    name: '文化祭１日目',
    start: Date.UTC(2023, 8, 17, 9, 0) - TZ,
    end: Date.UTC(2023, 8, 17, 18, 0) - TZ,
  },
  // 2023/09/18 9:00~18:00
  {
    name: '文化祭２日目',
    start: Date.UTC(2023, 8, 18, 9, 0) - TZ,
    end: Date.UTC(2023, 8, 18, 18, 0) - TZ,
  },
]

const padZero = (padded: number) => padded.toString().padStart(2, '0')

const Counter = ({ unit, children }: { unit: string; children: ReactNode }) => {
  return (
    <>
      <span className={styles.enhance} data-testid={`counter-${unit}`}>
        {children}
      </span>
      <span className={styles.small}>{unit}</span>
    </>
  )
}

const Remaining = ({ start, now }: { start: number; now: number }) => {
  const remaining = {
    days: Math.floor((start - now) / 86400000),
    hours: Math.floor((start - now) / 3600000),
    minutes: Math.floor((start - now) / 60000),
    seconds: Math.floor((start - now) / 1000),
  }
  return (
    <>
      <Counter unit='日'>{padZero(remaining.days)}</Counter>
      <Counter unit='時間'>{padZero(remaining.hours % 24)}</Counter>
      <br />
      <Counter unit='分'>{padZero(remaining.minutes % 60)}</Counter>
      <Counter unit='秒'>{padZero(remaining.seconds % 60)}</Counter>
    </>
  )
}

const Countdown = () => {
  const isClient = useClient()
  const [now, setNow] = useState(Date.now())
  const [intervalMs, setIntervalMs] = useState(1000)
  useEffect(
    () => {
      if (!isClient) return
      const intervalId = setInterval(() => {
        setNow(Date.now())
        // 残りが 100 秒以内になったら 250ms で更新、それ以外は 1000ms で更新
        if (FES_TIMES.some((time) => time.start - now < 100000)) {
          if (intervalMs > 250) setIntervalMs(250)
        } else {
          if (intervalMs > 1000) setIntervalMs(1000)
        }
      }, intervalMs)
      return () => clearInterval(intervalId)
    },
    // now が変わっても更新する必要はないので、警告を出さない
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isClient, intervalMs],
  )

  return (
    <motion.div
      className={styles.countdown}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      {!isClient ? (
        <>(読込中...)</>
      ) : (
        (() => {
          const fes = FES_TIMES.find((fes) => now <= fes.end)
          // 文化祭終了後
          if (!fes) {
            return (
              <div>
                2023 年度の文化祭は
                <br />
                <span className={styles.enhance}>終了</span>
                <br />
                しました
              </div>
            )
          }
          // 文化祭開催中
          if (now > fes.start) {
            return (
              <div className={styles.opening}>
                <div className={styles.left}>{fes.name}</div>
                <span className={styles.enhance}>開催中</span>
              </div>
            )
          }
          // 文化祭開始前
          return (
            <p>
              <div className={styles.left}>{fes.name}開会まで</div>
              <br />
              <Remaining start={fes.start} now={now} />
              <span className={styles.small}>&#xff01;</span>
            </p>
          )
        })()
      )}
    </motion.div>
  )
}

export default Countdown
