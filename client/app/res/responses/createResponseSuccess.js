import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { CREATE_SUCCESS } from "../../server/constants/response.const";

import Loading from '../design/loading'
import Success from '../design/success'

const CreateResponse = () => {

    const { response } = useSelector(state => state)
    
    const dispatch = useDispatch()

    const close = () => {
        dispatch({
            type: CREATE_SUCCESS,
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
                response.createResponseSuccess &&
                <Success 
                message={response.createResponseSuccess}
                close={close}
                />
            }

        </div>
    )
}

export default CreateResponse
