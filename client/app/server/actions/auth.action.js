import {
    AUTH,
} from "../constants/auth.const";
import {
    LOADING,
    LOGIN_ERROR,
    REGISTER_ERROR
} from "../constants/response.const";

import * as authApi from '../api/auth.api'

export const login = (userData, route) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await authApi.loginApi(userData)

        dispatch({
            type: AUTH,
            payload: {
                user: data.user,
                token: data.token
            }
        })

        localStorage.setItem('rad', true)

        dispatch({
            type: LOADING,
            payload: false
        })

        route.push('/me')

    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: {
                error: error.response.data.message
            }
        })
        localStorage.removeItem('rad', true)
    }

}

export const register = (userData) => async (dispatch) => {

    try {

        dispatch({
            type: LOADING,
            payload: true
        })

        const { data } = await authApi.registerApi(userData)

        dispatch({
            type: AUTH,
            payload: {
                token: data.token,
                user: data.user
            }
        })

        localStorage.setItem('rad', true)

        dispatch({
            type: LOADING,
            payload: false
        })

        route.push('/me')

    } catch (error) {
        dispatch({
            type: REGISTER_ERROR,
            payload: {
                error: error.response.data.message
            }
        })
        localStorage.removeItem('rad', true)
    }

}
