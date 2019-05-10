import { AMBIL_BERITA } from '../types'

export default function postReducer(state = [], action){
    switch( action.type ){
        case AMBIL_BERITA:
            return action.beritas;
        default:
            return state

    }
}
