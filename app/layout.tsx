import './globals.scss'
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata = {
  title: '第44回打越祭公式サイト (浅野学園2022年度文化祭)',
  description:
    '中高一貫の男子校「浅野中学校・高等学校」の中学生、高校生、全員で作る展示の数々をどうぞ。東京や川崎に近い、神奈川県横浜市にて2023年9月開催予定。史上最高の文化祭へ是非お越しください!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={notoSansJp.variable}>
      <body>{children}</body>
    </html>
  )
}
