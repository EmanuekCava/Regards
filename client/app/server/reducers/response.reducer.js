import {
    LOGIN_ERROR,
    REGISTER_ERROR,
    LOADING,
    CREATE_ERROR,
    CREATE_SUCCESS,
    REMOVE_SUCCESS
} from '../constants/response.const'

const initialState = {
    loading: false,
    loginResponse: false,
    registerResponse: false,
    createResponseError: false,
    createResponseSuccess: false,
    removeResponse: false
}

const responseReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload,
                loginResponse: false,
                registerResponse: false,
                createResponseError: false,
                createResponseSuccess: false,
                removeResponse: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                loginResponse: action.payload,
                registerResponse: false,
                createResponseError: false,
                createResponseSuccess: false,
                removeResponse: false
            }
        case REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                loginResponse: false,
                registerResponse: action.payload,
                createResponseError: false,
                createResponseSuccess: false,
                removeResponse: false
            }
        case CREATE_ERROR:
            return {
                ...state,
                loading: false,
                loginResponse: false,
                registerResponse: false,
                createResponseError: action.payload,
                createResponseSuccess: false,
                removeResponse: false
            }
        case CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                loginResponse: false,
                registerResponse: false,
                createResponseError: false,
                createResponseSuccess: action.payload,
                removeResponse: false
            }
        case REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                loginResponse: false,
                registerResponse: false,
                createResponseError: false,
                createResponseSuccess: false,
                removeResponse: action.payload
            }
        default:
            return state;
    }

}

export default responseReducer