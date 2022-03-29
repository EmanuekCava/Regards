import Image from 'next/image'

import React, { useState } from 'react'

import GetImage from './getImage'

import styles from '../../../../../styles/me.module.css'

const Imagen = ({ images, image }) => {

    const [isWatching, setIsWatching] = useState(false)

    const watchImage = () => {
        setIsWatching(!isWatching)
    }

    return (
        <>
            <div className={styles.imageContent}>
                <Image
                    src={`${image.image}`}
                    alt="regard"
                    height={200}
                    width={235}
                    key={image.imageId}
                    className={styles.image}
                    onClick={watchImage}
                />
            </div>
            {
                isWatching && 
                <GetImage images={images} image={image} watchImage={watchImage} />
            }
        </>
    )
}

export default Imagen
