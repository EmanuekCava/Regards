import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../../../styles/auth.module.css'

const Title = () => {
    return (
        <div className={styles.containerTitleForm}>
            <div className={styles.containTitleForm}>
                <Link href="/">
                    <h1 className={styles.titleAppForm}>Regards</h1>
                </Link>
                <Image
                    src="/regard.png"
                    alt="regard-image"
                    width="200"
                    height="200"
                />
                <p className={styles.textTitleForm}>Do you have memories to share?</p>
            </div>
        </div>
    )
}

export default Title