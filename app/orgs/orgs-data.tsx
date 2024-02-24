'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from '@components/common/image'
import Link from '@components/common/link'
import { CATEGORIES } from './categories'
import styles from './page.module.scss'
import useClient from 'hooks/client'
import { useSmallerThan } from 'hooks/useWindowSize'

const OrgDats = ({
  organizations,
}: {
  organizations: {
    name: string
    logo: string
    description: string
    place: string
    area: string
    genre: string
    'parent org': string
  }[]
}) => {
  const isNarrow = useSmallerThan({ width: 800 })
  const isWide = !isNarrow //useMediaQuery({ query: '(min-width: 800px)' })
  const isClient = useClient()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].name)
  const [categorySelected, setCategorySelected] = useState(false)
  useEffect(() => {
    if (!categorySelected) {
      let category = searchParams.get('category')
      if (category) category = decodeURI(category)
      else category = CATEGORIES[0].name
      if (CATEGORIES.some(({ name }) => name === category) && category) {
        setCategoryId(category)
      }
      setCategorySelected(true)
      return
    }
    router.replace('orgs?category=' + categoryId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, isClient])

  return (
    <>
      <ul className={styles.categories}>
        {CATEGORIES.map(({ name, icon }) => {
          const isActive = name === categoryId
          const isShowFull = !isClient || isWide || (!isNarrow && isActive)
          return (
            <li
              className={`${styles[`category-${name}`]} ${isActive ? styles.active : ''}`}
              key={name}
            >
              <button onClick={() => setCategoryId(name)}>
                {icon}
                {isShowFull && (name || 'その他')}
              </button>
            </li>
          )
        })}
      </ul>
      {isClient && isNarrow && (
        <div className={`${styles['category-narrow']} ${styles[`category-${categoryId}`]}`}>
          {CATEGORIES.find(({ name }) => name === categoryId)?.name}
        </div>
      )}

      <ul className={`${styles.organizations} ${styles[`category-${categoryId}`]}`}>
        {organizations &&
          organizations
            .filter(
              (org) =>
                categoryId === '全て' ||
                org.genre === categoryId ||
                (org.genre === '' && categoryId === 'その他'),
            )
            .map(({ place, area, name, logo, 'parent org': parent }) => {
              return (
                <li key={name}>
                  <Link href={`/orgs/${name}`}>
                    <div className={styles.logo}>
                      <Image
                        src={`/data/orgs/${name}/${logo}`}
                        alt=''
                        width={80}
                        height={80}
                        objectFit='contain'
                      />
                    </div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles['other-info']}>
                      <div className={styles.area}>場所:{area}</div>
                      {isClient && !isNarrow && (
                        <>
                          <div className={styles.area}>{place}</div>
                          <div className={styles['parent org']}>{parent}</div>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              )
            })}
      </ul>
    </>
  )
}

export default OrgDats
