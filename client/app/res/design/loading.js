import React from 'react'

import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import styles from '../../../styles/response.module.css'

const Loading = () => {
    return (
        <div className={styles.containerLoading}>
            <HourglassEmptyIcon fontSize="large" className={styles.iconLoading} />
        </div>
    )
}

export default Loading
