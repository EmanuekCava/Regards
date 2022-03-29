import Image from 'next/image'

import React, { useState, useEffect } from 'react'

import CloseIcon from '@material-ui/icons/Close';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styles from '../../../../../styles/me.module.css'

const GetImage = ({ images, watchImage, image }) => {

    let max = images.length;
    let [index, setIndex] = useState(images.indexOf(image))

    const leftImage = () => {
        setIndex(index -= 1)
    }
    const rightImage = () => {
        setIndex(index += 1)
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if ((e.key === 'a') || (e.key === 'a') || (e.key === 'w') || (e.key === 'W') 
            || (e.keyCode === 37) || (e.keyCode === 38)) {
                if (index != 0) {
                    leftImage()
                }
            }
            if ((e.key === 'd') || (e.key === 'd') || (e.key === 's') || (e.key === 'S') 
            || (e.keyCode === 39) || (e.keyCode === 40)) {
                if (index != (max - 1)) {
                    rightImage()
                }
            }
        })
    }, [])

    return (
        <div className={styles.getImageCointainer}>
            <CloseIcon className={styles.closeRegard} fontSize="large"
                onClick={watchImage} />
            {
                index != 0 &&
                <ArrowLeftIcon className={styles.left} fontSize="large" onClick={leftImage} />
            }
            <Image
                src={images[index].image}
                height={500}
                width={600}
                alt="regard-image"
            />
            {
                index != (max - 1) &&
                <ArrowRightIcon className={styles.right} fontSize="large" onClick={rightImage} />
            }
        </div>
    )
}

export default GetImage
