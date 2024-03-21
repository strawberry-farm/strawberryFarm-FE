import axios from 'axios';

const baseURL = 'https://strawberryfarm.shop';

const axiosInstance= axios.create({
    baseURL: baseURL,
  });

axiosInstance.interceptors.request.use((config) => {
    
    const localUser = localStorage.getItem('jwt');
    const reLocalUser = localStorage.getItem('reJwt') as string;
    const token = localUser ? localUser : null;
    if (token && token.length > 0) {
        const isString = `Bearer :`+token;
        const not = isString.replace('"',"");
        const notTwo= not.replace('"',"");
        const reNot = reLocalUser.replace('"', '');
        const reNotTwo = reNot.replace('"', '');
        config.headers['Authorization'] = notTwo; 
        config.headers["Refresh-Token"] = reNotTwo;
    }else{
        config.headers['Authorization'] = null
    }

    
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
