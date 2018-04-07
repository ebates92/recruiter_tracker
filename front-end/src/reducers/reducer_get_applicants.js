import { FETCH_APPLICANTS } from '../actions/get_applicants'

export default function (state = null, action) {
    console.log('action provided', action)
    switch (action.type) {
        case FETCH_APPLICANTS:
            return [ action.payload ]
        default:
            return state
    }
}