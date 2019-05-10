import { INVEST } from '../types'

export default function registerReducer(state = [], action){
    switch( action.type ){
        case INVEST:
            let newVest = state.slice()
            newVest.splice(action.id, 0, action.payload)
            return newVest
            default:
        return state

    }
}
