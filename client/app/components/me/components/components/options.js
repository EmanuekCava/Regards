import React from 'react'
import { useDispatch } from "react-redux";

import { removeRegard } from "../../../../server/actions/regard.action";

import styles from '../../../../../styles/me.module.css'

const Options = ({ auth, regardId, setOptions }) => {

    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeRegard(auth.auth.token, regardId))
        setOptions(false)
    }

    return (
        <div className={styles.containerOptions}>
            <ul className={styles.optionsList}>
                <li className={styles.option} onClick={remove}>Remove regard</li>
                <li className={styles.option}>Update regard</li>
            </ul>
        </div>
    )
}

export default Options
