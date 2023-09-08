import { BsLine, BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs'

const officialLinks = [
  {
    service: 'LINE',
    text: '公式 LINE を友だち追加',
    style: 'sns-line',
    href: 'https://line.me/R/ti/p/@136ffgbc',
    icon: <BsLine />,
  },
  {
    service: 'YouTube',
    text: '公式 YouTube をチャンネル登録',
    style: 'sns-youtube',
    href: 'https://youtube.com/c/uchikoshi-fes',
    icon: <BsYoutube />,
  },
  {
    service: 'Twitter',
    text: '公式 Twitter をフォロー',
    style: 'sns-twitter',
    href: 'https://twitter.com/uchikoshifes',
    icon: <BsTwitter />,
  },
  {
    service: 'Instagram',
    text: '公式 Instagram をフォロー',
    style: 'sns-instagram',
    href: 'https://instagram.com/uchikoshifes',
    icon: <BsInstagram />,
  },
]

export default officialLinks
