'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Link from '@components/common/link'
import { fetchInterviewDescription } from '../fetch'
import styles from './page.module.scss'

const OrgData = (props: {
  props: {
    name: string
    post: string
    timestamp: string
  }
}) => {
  const prop = props.props
  const Description = dynamic(() => fetchInterviewDescription(prop.timestamp), {
    loading: () => <div className={styles['description-loading']}>(読込中...)</div>,
    ssr: false,
  })
  return (
    <>
      <article className={styles.Interview}>
        <div className={styles.description}>
          <h1>
            {prop.post}担当 {prop.name}さん へのインタビュー
          </h1>
          <MDXProvider>
            <Description />
          </MDXProvider>
        </div>
        <div className={styles.back}>
          <Link href={`/articles`}>記事一覧へ戻る</Link>
        </div>
      </article>
    </>
  )
}

export default OrgData
