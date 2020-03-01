import {FETCH_POSTS, POST_POSTS, DELETE_POST, ADD_FILE, SIGN_IN} from './../actions/types';
import authenticationData from './contentsData/authenticationData';
//import {initialState} from './index'
export const initialState={
    items: [],
    item:{},
    fileName:'',
    authenticationData: authenticationData,
    isAuthenticated: false
}

export default function fetchReducers(state=initialState, action){
    console.log('ciiihs', action)
    switch (action.type) {
        case ADD_FILE:
            return{
                ...state,
                fileName: action.fileName
            }
        case SIGN_IN:
            return{
                ...state,
                isAuthenticated: action.isAuthenticated
            }
        default:
           return state;
    }

}


