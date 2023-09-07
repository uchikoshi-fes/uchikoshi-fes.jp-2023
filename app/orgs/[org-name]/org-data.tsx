'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'
//import { NextSeo } from 'next-seo'
import Link from '@components/common/link'
import { fetchOrganizationDescription } from '../fetch'
import { CATEGORIES, AREAS } from '../page'
import styles from './page.module.scss'

const OrgData = (props: any) => {
  const prop = props.props
  console.log('OrganizationData')
  console.log(prop)
  console.log(prop.name)
  console.log(Object.keys(prop))
  const Description = dynamic(() => fetchOrganizationDescription(prop.name), {
    loading: () => <div className={styles['description-loading']}>(読込中...)</div>,
  })
  const mdxComponents: MDXComponents = {
    p: (prop) => <pre className={styles.paragraph}>{prop.children}</pre>,
    a: (prop) => <Link href={prop.href}>{prop.children}</Link>,
    img: (prop) => (
      <div className={styles.image}>
        <Image
          title={prop.title}
          src={prop.src}
          alt={prop.alt}
          sizes='80vw'
          height={prop.height}
          width={prop.width}
          style={{
            width: '80%',
            height: 'auto',
          }}
          {...props}
        />
        <div>{prop.title}</div>
      </div>
    ),
  }
  const components = useMDXComponents(mdxComponents)
  return (
    <>
      {/* <NextSeo
        title={title}
        openGraph={{ title: `参加団体「${title}」${name ? `by ${name}` : ''}` }}
      /> */}
      <article className={styles.organization}>
        <div className={styles.info}>
          {prop.logo && (
            <div className={styles.logo}>
              <Image
                src={`/data/orgs/${prop.name}/${prop.logo}`}
                alt={prop.name}
                title={`${prop.name}ロゴ`}
                layout='responsive'
                height={408}
                width={400}
              />
            </div>
          )}
          <div className={styles.meta}>
            <div>
              {/* <FontAwesomeIcon icon={faTag} size='lg' /> */}
              カテゴリー:&nbsp;
              <Link href={`/orgs/?category=${prop.genre}`}>
                {CATEGORIES.find(({ name }) => name === prop.genre)?.name}
              </Link>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faLocationDot} size='lg' /> */}
              場所:&nbsp;
              {prop.area}
              {prop.room && <div className={styles.room}>{prop.room}</div>}
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faPeopleGroup} size='lg' /> */}
              担当団体:&nbsp;
              {prop.url ? (
                <Link href={prop.url}>{prop.name || '有志'}</Link>
              ) : (
                prop['parent org'] || '有志'
              )}
            </div>
            {prop.twitter && (
              <div>
                {/* <FontAwesomeIcon icon={faTwitter} size='lg' /> */}
                Twitter:&nbsp;
                <Link href={`https://twitter.com/${prop.twitter}`}>@{prop.twitter}</Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.description}>
          <h1>{prop.name}</h1>
          <MDXProvider components={components}>
            <Description />
          </MDXProvider>
        </div>
        <div className={styles.back}>
          <Link href={`/orgs?category=${prop.categoryId}`}>参加団体一覧へ戻る</Link>
        </div>
      </article>
    </>
  )
}

export default OrgData
