import { combineReducers } from 'redux';
import sessionReducer from '././session/sessionReducer'
import datas from './mapsReducer'

const allreRuducers = combineReducers({
    sessionReducer: sessionReducer,
    datas: datas
})

export default allreRuducers;