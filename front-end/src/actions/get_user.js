import axios from 'axios';
import { url } from '../api_route';

export const FETCH_USER = 'FETCH_USER'

export function fetchuser() {
    const userData = axios.get(`${url}/api/user`)

    return {
        type: FETCH_USER,
        payload: userData
    };
}