import { FETCH_POSTING_APPLICANTS } from '../actions/get_posting_applicants'

export default function (state = null, action) {
    console.log('action received', action)
    switch (action.type) {
        case FETCH_POSTING_APPLICANTS:
            return [ action.payload ]
        default:
            return state
    }
}