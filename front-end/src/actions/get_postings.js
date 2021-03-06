import axios from 'axios';
import { url } from '../api_route';

export const FETCH_POSTINGS = 'FETCH_POSTINGS'

export function fetchpostings() {
    const postingRecords = axios.get(`${url}/api/postings`)

    return {
        type: FETCH_POSTINGS,
        payload: postingRecords
    };
}

