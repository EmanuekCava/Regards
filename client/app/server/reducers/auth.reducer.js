import { 
    AUTH,
    LOGOUT
} from "../constants/auth.const";

const initialState = {
    auth: {},
    islogged: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: action.payload,
                islogged: true
            }
        case LOGOUT: 
            localStorage.removeItem('rad')
            return {
                ...state,
                auth: {},
                islogged: false
            }
        default:
            return state;
    }

}

export default authReducer