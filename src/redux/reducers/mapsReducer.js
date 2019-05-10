import { AMBIL_MAPS } from '../types'

export default function mapsReducer(state = [], action){
    switch( action.type ){
        case AMBIL_MAPS:
            return action.datas;
        default:
            return state

    }
}
