import {
    GET_REGARDS,
    GET_REGARD,
    CREATE_REGARDS,
    REMOVE_REGARDS
} from '../constants/regard.const'

const initialState = {
    regards: [],
    result: 0,
    regard: {
        images: []
    },
}

const regardReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_REGARDS:
            return {
                ...state,
                regards: action.payload.regards,
                result: action.payload.result
            }
        case GET_REGARD:
            return {
                ...state,
                regard: action.payload
            }
        case CREATE_REGARDS:
            return {
                ...state,
                regards: [...state.regards, action.payload]
            }
        case REMOVE_REGARDS:
            return {
                ...state,
                regards: state.regards.filter(regard => regard._id !== action.payload),
                regard: {
                    images: []
                }
            }
        default:
            return state;
    }

}

export default regardReducer