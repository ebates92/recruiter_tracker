import axios from 'axios';
import { url } from '../api_route';

export const FETCH_POSTING_APPLICANTS = 'FETCH_POSTING_APPLICANTS'
console.log('doing the postingupdate')
export function fetchPostingApplicants() {
    const postingApplicants = axios.get(`${url}/api/postingApplicant`)

    return {
        type: FETCH_POSTING_APPLICANTS,
        payload: postingApplicants
    };
}
