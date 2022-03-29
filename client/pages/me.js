import Head from 'next/head'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getRegards, getRegard } from '../app/server/actions/regard.action'

import { Protect } from '../app/layout/protect'
import ListRegards from '../app/components/me/listRegards'
import RegardsView from '../app/components/me/regardsView'
import CreateResponse from '../app/res/responses/createResponseSuccess'
import RemoveResponse from '../app/res/responses/removeResponse'

import styles from '../styles/me.module.css'

const Me = () => {

    const { auth, regards } = useSelector(state => state)

    const dispatch = useDispatch()

    const [regardId, setRegardId] = useState(null)

    useEffect(() => {
        dispatch(getRegards(auth.auth.token))
    }, [dispatch, auth.auth.token])

    useEffect(() => {
        dispatch(getRegard(auth.auth.token, regardId))
    }, [dispatch, auth.auth.token, regardId])

    return (
        <>
            <Head>
                <title>Me - Auth</title>
            </Head>
            <>
                <Protect>
                    <div className={styles.containerMe}>
                        <ListRegards regards={regards} setRegardId={setRegardId} />
                        <RegardsView regards={regards} auth={auth} regardId={regardId}
                            CreateResponse={CreateResponse} RemoveResponse={RemoveResponse}
                        />
                    </div>
                </Protect>
            </>
        </>
    )
}

export default Me
