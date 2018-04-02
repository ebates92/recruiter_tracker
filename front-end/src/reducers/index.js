import { combineReducers } from 'redux';
import ReducerGetPostings from './reducer_get_postings'

const rootReducer = combineReducers({
    postingRecords: ReducerGetPostings
})

export default rootReducer;