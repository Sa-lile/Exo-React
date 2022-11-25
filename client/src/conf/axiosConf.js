import axios from 'axios';

const baseUrl = `http://www.react-tuto.local:3001/api`;

const axiosCustomInstance = axios.create({
    baseURL: baseUrl,
});

axiosCustomInstance.defaults.withCredentials = true;

export { axiosCustomInstance, baseUrl };