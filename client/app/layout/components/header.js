import { useRouter } from 'next/router'

import React from 'react'
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../server/constants/auth.const";

import AddIcon from '@material-ui/icons/Add';
import styles from '../../../styles/index.module.css'

const Header = () => {

    const route = useRouter()

    const dispatch = useDispatch()

    const logout = () => {
        route.push('/auth')
        dispatch({
            type: LOGOUT
        })
    }
    const me = () => {
        route.push('/me')
    }
    const create = () => {
        route.push('/create')
    }

    return (
        <div className={styles.containerHeader}>
            <h1 className={styles.textHeader} onClick={me}>REGARDS</h1>
            {
                route.pathname !== "/create" &&
                <button className={styles.buttonAdd} onClick={create} >
                    <AddIcon fontSize="large" />
                </button>
            }
            <button onClick={logout} className={styles.logoutButton}>LOGOUT</button>
        </div>
    )
}

export default Header
