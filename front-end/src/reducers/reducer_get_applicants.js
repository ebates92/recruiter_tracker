import { FETCH_APPLICANTS } from '../actions/get_applicants'

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_APPLICANTS:
        return [ action.payload ]
    }
    return state;
}