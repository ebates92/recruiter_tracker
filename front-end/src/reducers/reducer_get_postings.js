import { FETCH_POSTINGS } from '../actions/get_postings'

export default function (state = null, action) {
    console.log('action received', action.payload)
    switch (action.type) {
        case FETCH_POSTINGS:
            return [ action.payload ]
    }
    return state;
}