import axios from "axios";

axios.defaults.baseURL = 'https://vercel-nodejs.onrender.com/api/v2/auth'

axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401) {
        const response = await axios.post('refresh-token', {}, {withCredentials: true});

        if(response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.user.token}`;

            return axios(error.config);
        }
    }

    return error;
})