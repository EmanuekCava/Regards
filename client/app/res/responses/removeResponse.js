import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { REMOVE_SUCCESS } from "../../server/constants/response.const";

import Loading from '../design/loading'
import Success from '../design/success'

const RemoveResponse = () => {

    const dispatch = useDispatch()

    const close = () => {
        dispatch({
            type: REMOVE_SUCCESS,
            payload: false
        })
    }

    const { response } = useSelector(state => state)

    return (
        <div>
            {
                response.loading &&
                <Loading />
            }
            {
                response.removeResponse &&
                <Success 
                message={response.removeResponse} 
                close={close}
                />
            }
        </div>
    )
}

export default RemoveResponse
