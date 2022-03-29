import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import { CREATE_ERROR } from "../../server/constants/response.const";

import Loading from '../design/loading'
import Danger from '../design/danger'

const CreateResponse = () => {

    const { response } = useSelector(state => state)
    
    const dispatch = useDispatch()

    const close = () => {
        dispatch({
            type: CREATE_ERROR,
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
                response.createResponseError.error &&
                <Danger 
                message={response.createResponseError.error}
                close={close}
                />
            }
        </div>
    )
}

export default CreateResponse
