import { combineReducers } from 'redux';
import ReducerGetPostings from './reducer_get_postings';
import ReducerGetApplicants from './reducer_get_applicants';
import ReducerGetPostingApplicants from './reducer_get_posting_applicants';
import ReducerGetUser from './reducer_get_user';
import ReducerSelectedApplicant from './reducer_selected_applicant'
import ReducerSelectedPosting from './reducer_selected_posting'

const rootReducer = combineReducers({
    postingData: ReducerGetPostings,
    applicantData: ReducerGetApplicants,
    postingApplicantData: ReducerGetPostingApplicants,
    userData: ReducerGetUser,
    selectedApplicant: ReducerSelectedApplicant,
    selectPosting: ReducerSelectedPosting
})

export default rootReducer;