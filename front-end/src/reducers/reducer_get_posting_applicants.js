import { FETCH_POSTING_APPLICANTS } from '../actions/get_posting_applicants'

export default function (state = null, action) {
    console.log('action received', action.payload)
    switch (action.type) {
        case FETCH_POSTING_APPLICANTS:
            return [ action.payload ]
    }
    return state;
}