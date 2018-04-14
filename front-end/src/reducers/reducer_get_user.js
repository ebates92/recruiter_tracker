import { FETCH_USER } from '../actions/get_user'

export default function (state = null, action) {
    console.log('action received', action)
    switch (action.type) {
        case FETCH_USER:
            return action.payload.data
        default:
            return state
    }
}