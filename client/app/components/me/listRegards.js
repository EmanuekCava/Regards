import React from 'react'

import Regard from './components/regard'

import styles from '../../../styles/me.module.css'

const ListRegards = ({ regards, setRegardId }) => {

    return (
        <div className={styles.containerRegardsList}>
            <div className={styles.regardsAmount}>
                <p className={styles.textRegardsAmount}>REGARDS: {regards.result}</p>
            </div>
            {
                regards.regards.map((regard) => {
                    return <Regard regard={regard} setRegardId={setRegardId} key={regard._id} />
                })
            }
        </div>
    )
}

export default ListRegards
