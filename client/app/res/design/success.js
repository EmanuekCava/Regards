import React from 'react'

import CloseIcon from '@material-ui/icons/Close';
import styles from '../../../styles/response.module.css'

const Danger = ({ message, close }) => {
    return (
        <div className={styles.containerSuccess}>
            <p className={styles.textResponse}>{message}</p>
            <CloseIcon className={styles.closeDanger} fontSize="medium" 
                onClick={close}
            />
        </div>
    )
}

export default Danger
