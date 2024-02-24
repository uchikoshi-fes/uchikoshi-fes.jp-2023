'use client'
import NextImage, { StaticImageData } from 'next/image'

const customLoader = ({ src }: { src: string }) => {
  return src
}

const imgixLoader = ({
  src,
  width,
  quality,
}: {
  src: string | StaticImageData
  width: number | string
  quality?: number | string
}) => {
  // console.log(src)
  if (typeof src !== 'string') {
    console.log(src.width)
    src = src.src
  }

  if (src.startsWith('http')) {
    console.log(src)
    return src
  } else {
    const url = new URL(`https://uchikoshifes-390111762.imgix.net${src}`)
    const params = url.searchParams
    params.set('auto', params.getAll('auto').join(',') || 'format')
    params.set('fit', params.get('fit') || 'max')
    params.set('w', params.get('w') || width.toString())
    params.set('q', (quality || 50).toString())
    return url.href
  }
}

const Image = ({
  src,
  ...props
}: {
  src: string | StaticImageData
  alt: string
  width?: number | `${number}`
  height?: number | `${number}`
  className?: string
  fill?: boolean
  sizes?: string
  title?: string
  priority?: boolean
  style?: Object
  loading?: 'lazy' | 'eager'
  layout?: 'responsive' | 'fill' | 'fixed'
  objectFit?: 'fill' | 'contain' | 'cover'
}) => {
  // console.log(src)
  return (
    <NextImage
      src={src}
      //src={typeof src === 'string' ? (src.startsWith('/') ? '' : '') + src : src}
      {...props}
      loader={process.env.isProduct ? imgixLoader : customLoader}
    />
  )
}

export default Image
