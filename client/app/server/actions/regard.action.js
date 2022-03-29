import {  
    GET_REGARDS,
    GET_REGARD,
    CREATE_REGARDS,
    REMOVE_REGARDS
} from "../constants/regard.const";
import { 
    LOADING,
    CREATE_ERROR,
    CREATE_SUCCESS,
    REMOVE_SUCCESS
} from "../constants/response.const";


import * as regardApi from '../api/regard.api'

export const getRegards = (token) => async (dispatch) => {

    try {

        const { data } = await regardApi.regardsApi(token)

        dispatch({
            type: GET_REGARDS,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const getRegard = (token, id) => async (dispatch) => {

    try {

        const { data } = await regardApi.getRegardApi(token, id)

        dispatch({
            type: GET_REGARD,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}

export const createRegard = (token, regard) => async (dispatch) => {

    try {

    dispatch({
        type: LOADING,
        payload: true
    })

    const { data } = await regardApi.createRegardApi(token, regard)

    console.log(data);
    
    dispatch({
        type: CREATE_REGARDS,
        payload: data.regard
    })

    dispatch({
        type: LOADING,
        payload: false
    })

    dispatch({
        type: CREATE_SUCCESS,
        payload: data.message
    })
        
    } catch (error) {
        dispatch({
            type: CREATE_ERROR,
            payload: {
                error: error.response.data.message
            }
        })
    }

}

export const removeRegard = (token, id) => async (dispatch) => {

    try {

        const { data } = await regardApi.removeRegardApi(token, id)

        dispatch({
            type: LOADING,
            payload: true
        })

        dispatch({
            type: REMOVE_REGARDS,
            payload: id
        })

        dispatch({
            type: LOADING,
            payload: false
        })

        dispatch({
            type: REMOVE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log(error);
    }

}