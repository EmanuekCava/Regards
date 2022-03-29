import Head from 'next/head'
import { useRouter } from "next/router";

import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

import Header from './components/header'

const Layout = ({ children }) => {

    const { asPath } = useRouter()

    const { auth } = useSelector(state => state)

    const [user, setUser] = useState(false)

    useEffect(() => {
        setUser(auth.islogged)
    }, [asPath])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Anaheim&display=swap" rel="stylesheet" />
                <link rel="icon" href="regard.ico" type="image/x-icon" />
            </Head>
            <div>
                {user ? (
                    <Header />
                ) : (
                    <></>
                )}
                {children}
            </div>
        </>
    )
}

export default Layout
