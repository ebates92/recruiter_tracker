import axios from 'axios';
import { url } from '../api_route';

export const FETCH_APPLICANTS = 'FETCH_APPLICANTS'

export function fetchapplicants() {
    const applicantRecords = axios.get(`${url}/api/applicants`)

    return {
        type: FETCH_APPLICANTS,
        payload: applicantRecords
    };
}