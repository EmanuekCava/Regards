import React, { useState } from 'react'

import Imagen from './image/image'
import Options from './components/options';

import DragIndicatorRoundedIcon from '@material-ui/icons/DragIndicatorRounded';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import styles from '../../../../styles/me.module.css'

const Regards = ({ regard, auth, regardId, CreateResponse, RemoveResponse }) => {

    const [options, setOptions] = useState(false)

    const openOptions = () => {
        setOptions(!options)
    }

    let images = [];

    return (
        <div className={styles.regards}>
            <div className={styles.containerTitleRegards}>
            <BurstModeIcon className={styles.moreImageList} fontSize="large"/>
                {
                    regardId &&
                    <>
                        <h1 className={styles.titleRegards} >{regard.title}</h1>
                        <DragIndicatorRoundedIcon fontSize="large" className={styles.crudOptions} onClick={openOptions} />
                    </>
                }
                <hr />
                {
                    options &&
                    <Options auth={auth} regardId={regardId} setOptions={setOptions} />
                }
            </div>
            <CreateResponse />
            <RemoveResponse />
            <div className={styles.containerImages}>
                {
                    regard.images.map((image) => {
                        images.push(image)
                        return <Imagen images={images} image={image} key={image.imageId} />
                    })
                }
            </div>
        </div>
    )
}

export default Regards
