import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export const get = async (path, props ={}) => {
    const request = await instance.get(path,props);
    return request.data;
}

export default instance;