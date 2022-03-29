import { combineReducers } from "redux";

import auth from '../reducers/auth.reducer'
import response from '../reducers/response.reducer'
import regards from '../reducers/regard.reducer'

export default combineReducers({
    auth,
    response,
    regards
})