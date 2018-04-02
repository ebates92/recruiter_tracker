import axios from 'axios';
import url from '../api_route';

export const FETCH_POSTINGS = 'FETCH_POSTINGS'

export function fetchpostings() {
    const postingRecords = axios.get(`${url}/api/postings`)
        // .then(res => res.data)
        // .then(
        //     (postingRecords) => {
        //         this.setState({
        //         postingData: postingRecords,
        //         postingOptions: postingRecords
        //         });
        //     },
        //     (error) => {
        //         this.setState({
        //         error
        //         })
        //     }
        // )

    return {
        type: FETCH_POSTINGS,
        payload: postingRecords
    };
}

