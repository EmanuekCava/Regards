import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { REGISTER_ERROR } from "../../server/constants/response.const";

import Loading from '../design/loading'
import Danger from '../design/danger'

const RegisterResponse = () => {

    const { response } = useSelector(state => state)

    const dispatch = useDispatch()

    const close = () => {
        dispatch({
            type: REGISTER_ERROR,
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
                response.registerResponse.error &&
                <Danger 
                message={response.registerResponse.error} 
                close={close}
                />
            }

        </div>
    )
}

export default RegisterResponse
