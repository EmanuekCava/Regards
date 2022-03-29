import Head from 'next/head'
import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Login from '../app/components/form/login'
import Register from '../app/components/form/register'

import styles from '../styles/auth.module.css'
import CloseIcon from '@material-ui/icons/Close';

export default function Home() {


    const [signUp, setSignUp] = useState(false)

    const closeRegister = () => {
        setSignUp(false)
    }

    return (
        <>
            <Head>
                <title>Regards - Auth</title>
            </Head>
            <div className={styles.containerAuth}>
                {
                    signUp ? (
                        <>
                            <div className={styles.registerContainer}>
                                <CloseIcon className={styles.closeRegister} fontSize="large"
                                    onClick={closeRegister} />
                                <Register setSignUp={setSignUp} />
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }
                <Login setSignUp={setSignUp} />
            </div>
        </>
    )
}
