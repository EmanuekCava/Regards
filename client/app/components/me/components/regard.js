import React from 'react'

import styles from '../../../../styles/me.module.css'

const Regard = ({ regard, setRegardId }) => {

    const getRegard = () => {
        setRegardId(regard._id)
    }

    return (
        <div className={styles.regard} onClick={getRegard}>
            <h2 className={styles.title}>{regard.title}</h2>
            <p className={styles.description}>{regard.description}</p>
        </div>
    )
}

export default Regard
