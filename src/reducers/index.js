import {combineReducers} from 'redux';
import fetchReducers from './fetchReducers';
import postReducers from './postReducers';


const rootReducers=combineReducers({fetchReducers,postReducers})
export default rootReducers;
