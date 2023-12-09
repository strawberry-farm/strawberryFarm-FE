import axios from 'axios';

const baseURL = 'https://strawberryfarm.shop';
const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
    return config;
});
axiosInstance.interceptors.response.use(
    (res) => {
        return Promise.resolve(res.data);
    },
    (err) => {
        //if (err.response.status === 500) console.log('500에러 서버 에러관리자에게 문의해주세요.');
        return Promise.reject(err.response.data);
    },
);
export default axiosInstance;
