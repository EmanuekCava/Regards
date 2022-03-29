import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { LOGIN_ERROR } from "../../server/constants/response.const";

import Loading from '../design/loading'
import Danger from '../design/danger'

const LoginResponse = () => {

    const { response } = useSelector(state => state)

    const dispatch = useDispatch()

    const close = () => {
        dispatch({
            type: LOGIN_ERROR,
            payload: false
        })
    }

    return (
        <div>
            
            {
                response.loading && 
                <Loading />
            }
            {
                response.loginResponse.error &&
                <Danger 
                message={response.loginResponse.error} 
                close={close} 
                />
            }

        </div>
    )
}

export default LoginResponse
