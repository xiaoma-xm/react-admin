import axios from "axios";

const request = axios.create({
    baseURL: '/mock',
    timeout: 5000
});

request.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err);
});

export default request;