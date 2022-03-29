import Head from 'next/head'
import { useRouter } from 'next/router'

import React from 'react'

import styles from '../styles/index.module.css'

export default function Home() {

  const route = useRouter()

  const pushAuth = () => {
    route.push('/auth')
  }

  return (
    <>
      <Head>
        <title>Regards - Home</title>
      </Head>
      <div className={styles.containerHome}>
        <div className={styles.containerTitleHome}>
          <h1 className={styles.textTitleHome}>Welcome to Regards</h1>
          <p className={styles.textSubtitleHome}>Share your memories</p>
        </div>
        <div className={styles.containerStart}>
          <button className={styles.buttonStart} onClick={pushAuth}>
            <p className={styles.textButtonStart}>Start now!</p>
          </button>
        </div>
      </div>
    </>
  )
}
