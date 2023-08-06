'use client'
import { useLayoutEffect, useState } from 'react'

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const useSmallerThan = ({ width, height }: { width?: number; height?: number }): boolean => {
  const [ScreenWidth, ScreenHeight] = useWindowSize()
  if (width === undefined || height === undefined) {
    if (width === undefined && height !== undefined) return ScreenHeight < height
    else if (width !== undefined) return ScreenWidth < width
    else return false
  } else return ScreenWidth < width && ScreenHeight < height
}
export default useWindowSize
export { useSmallerThan }
