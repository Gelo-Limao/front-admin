import axios from 'axios';

export const apiLogin = axios.create({
    baseURL: 'http://localhost:3000/api-login/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const apiUser = axios.create({
    baseURL: 'http://localhost:3000/api-user/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
