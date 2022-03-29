import { useRouter } from 'next/router'

import React, { useEffect } from 'react'

import styles from '../styles/index.module.css'

const Error = () => {

    const route = useRouter()

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 1000);
    }, [])

    return (
        <div className={styles.containerError}>
            <div className={styles.containError}>
                <h1 className={styles.textTitleHome}>REGARDS</h1>
            </div>
        </div>
    )
}

export default Error
