import axios from 'axios';
import url from '../api_route';

export const FETCH_POSTING_APPLICANTS = 'FETCH_POSTING_APPLICANTS'

export function fetchPostingApplicants() {
    const postingApplicants = axios.get(`${url}/api/postingApplicant`)
        // .then(res => res.data)
        // .then(
        //     (postingApplicants) => {
        //         console.log(postingApplicants)
        //         this.setState({
        //         postingApplicantData: postingApplicants,
        //         newPostingApplicantData: postingApplicants
        //         });
        //     },
        //     (error) => {
        //         this.setState({
        //         error
        //         })
        //     }
        // )

    return {
        type: FETCH_POSTING_APPLICANTS,
        payload: postingApplicants
    };
}
